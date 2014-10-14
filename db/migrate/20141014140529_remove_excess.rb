class RemoveExcess < ActiveRecord::Migration
  def up
    drop_table :repo_listings
    drop_table :categories

  end

  def down

    create_table :repo_listings do |t|
      t.integer :repository_id, null: false
      t.integer :user_id, null: false
      t.string  :role, null: false
      t.text    :description

      t.timestamps
    end

    create_table :categories do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
