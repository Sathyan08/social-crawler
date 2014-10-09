class Category < ActiveRecord::Base

  has_many :repositories

  validates :name, presence: true
end
