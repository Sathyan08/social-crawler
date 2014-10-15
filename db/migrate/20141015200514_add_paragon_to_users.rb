class AddParagonToUsers < ActiveRecord::Migration
  def change
    add_column :users, :paragon, :boolean, default: false
  end
end
