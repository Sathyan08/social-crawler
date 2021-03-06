class Repository < ActiveRecord::Base
  has_many :collaborations
  has_many :users, through: :collaborations
  has_many :language_listings
  has_many :languages, through: :language_listings

  belongs_to :category

  def self.create_repo_with_omniauth(repo_object)
    repo_hash = repo_object.as_json

    create! do |repo|
      repo.id = repo_hash[:name]
      repo.full_name = repo_hash[:full_name]
      repo.rid = repo_hash[:id]
    end
  end
end
