class AddCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.integer :user_id, null: false
      t.integer :repository_id, null: false

      t.timestamps
    end
  end
end
