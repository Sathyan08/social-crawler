class Collaboration < ActiveRecord::Base
  belongs_to :repository
  has_many   :users, through: :repositories
end
