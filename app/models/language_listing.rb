class LanguageListing < ActiveRecord::Base
  belongs_to :language
  belongs_to :repositories

  validates :repository_id, presence: true
  validates :language_id, presence: true
  validates :count, presence: true

end
