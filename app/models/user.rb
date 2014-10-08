class User < ActiveRecord::Base
  has_many :collaborations
  has_many :repositories, through: :collaborations

  has_many :reviews
  has_many :reviewees, through: :reviews

  has_many :inverse_reviews, class_name: :review, foreign_key: :reviewee_id
  has_many :reviewerers, through: :inverse_reviews, source: :user

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.gitname = auth["info"]["nickname"]
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
