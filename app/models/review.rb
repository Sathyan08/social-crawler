class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :reviewee, class_name: "User"

  validates :score, presence: true
end
