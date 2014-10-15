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

  def weighted_score

    if self.paragon
      return 10
    elsif !self.p_linked
      return nil
    else
      linked_reviews = get_linked
      weighted_scores = get_weighted(linked_reviews)
    end

    weighted_sum = weighted_scores.inject { |sum, n| sum + n }
    weighted_sum.to_f/weighted_scores.length
  end

  def get_linked
    linked_reviews = []

    reviews_received.each do |review_received|
      if review_received.user.p_linked
        linked_reviews << review_received
      end
    end

    linked_reviews
  end

  def get_weighted(linked_reviews)
    weighted = []

    linked_reviews.each do |linked_review|
      power = linked_review.user.weighted_score.to_i - 1

      (2 ** power).times do
        weighted << linked_review.score
      end
    end

    weighted
  end
end
