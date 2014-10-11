class Language < ActiveRecord::Base

  has_many :language_listings
  has_many :repositories, through: :language_listings

  validates :name, presence: true

end
