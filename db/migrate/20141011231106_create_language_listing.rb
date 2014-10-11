class CreateLanguageListing < ActiveRecord::Migration
  def change
    create_table :language_listings do |t|
      t.integer :repository_id, null: false
      t.integer :language_id, null: false
      t.string  :count, null: false

      t.timestamps
    end
  end
end
