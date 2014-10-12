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

  def highlighted_repos
    highlighted_repos = []

    repositories.each do |repo|
      if repo.highlighted
        highlighted_repos << repo
      end
    end

    highlighted_repos
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
