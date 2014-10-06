class Repository < ActiveRecord::Base
  has_many :users
  has_many :collaborations
end
