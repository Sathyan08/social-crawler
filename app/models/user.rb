class User < ActiveRecord::Base
  has_many :collaborations
  has_many :repositories, through: :collaborations

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.name = auth["info"]["name"]
      user.gitname = auth["info"]["nickname"]
    end
  end
end
