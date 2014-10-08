class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :reviewee, class_name: :user
end
