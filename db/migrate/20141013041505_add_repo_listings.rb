class AddRepoListings < ActiveRecord::Migration
  def change
     create_table :repo_listings do |t|
      t.integer :repository_id, null: false
      t.integer :user_id, null: false
      t.string  :role, null: false
      t.text    :description

      t.timestamps
    end
  end
end
