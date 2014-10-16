class User < ActiveRecord::Base
  has_many :collaborations
  has_many :repositories, through: :collaborations

  has_many :reviews_written, class_name: "Review", foreign_key: :user_id
  has_many :reviewees, through: :reviews_written, source: :reviewee

  has_many :reviews_received, class_name: "Review", foreign_key: :reviewee_id#, class_name: :review, foreign_key: :reviewee_id
  has_many :reviewers, through: :reviews_received, source: :user

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.gitname = auth["info"]["nickname"]
      user.email = auth["info"]["email"]
      user.git_avatar = auth["info"]["image"]
    end
  end

  def self.save_updated_weights
    updated_weights = User.calculate_weighted_scores

    updated_weights.each do |user_id, weight|
      user_sought = User.find(user_id)

      if !user_sought.paragon #ensures that the paragon is always a 10
        user_sought.weight = weight
        user_sought.save!
      else
        user_sought.weight = 10.0
        user_sought.save!
      end
    end
  end

  def self.calculate_weighted_scores

    user_weights = User.get_weights
    user_reviews = User.get_review_information

    100.times do |i|
      updated_weights = user_weights.dup

      user_reviews.each do |user_id, reviews|
        total_score = 0.0
        divisor = 0.0

        reviews.each do |review|
          user_weight = user_weights[review[:user_id]]
          power = user_weight.to_i

          total_score += user_weight * review[:score] * (2 ** power)
          divisor += user_weight * (2 ** power)
        end

        updated_weights[user_id] = total_score / divisor
      end

      user_weights = updated_weights
    end

    user_weights
  end

  def self.get_review_information
    review_info = {}

    reviews = Review.all
    reviews_from_plinked = []

    reviews.each do |rev|
      if rev.user.p_linked
        reviews_from_plinked << rev
      end
    end

    reviews_from_plinked.each do |review|
      if review_info.has_key?(review.reviewee.id)
        review_info[review.reviewee_id] << { user_id: review.user_id, score: review.score }
      else
        review_info[review.reviewee_id] = [{ user_id: review.user_id, score: review.score }]
      end
    end

    review_info
  end

  def self.get_weights
    weight_info = {}

    users = User.all

    users.each do |user|
      weight_info[user.id] = user.weight
    end

    weight_info
  end

  def review_for(other_user)
    reviews_written.find_by(reviewee: other_user) || Review.new
  end

  def highlighted
    highlighted = []

    collaborations.each do |collab|
      if collab.highlighted
        highlighted << collab
      end
    end

    highlighted
  end

  def average_score
    if reviews_received.count != 0
      reviews_received.sum(:score).to_f/reviews_received.count
    else
      nil
    end
  end

  def collaborators
    collaborators = []

    repositories.each do |repo|
      repo.users.each do |user|
        if user.uid != self.uid
          collaborators << user
        end
      end
    end

    collaborators.uniq
  end
end
