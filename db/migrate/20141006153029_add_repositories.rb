class AddRepositories < ActiveRecord::Migration
  def change
    create_table :repositories do |t|
      t.string :name, null: false
      t.string :full_name, null: false
      t.integer :rid, null: false

      t.timestamps
    end
  end
end
