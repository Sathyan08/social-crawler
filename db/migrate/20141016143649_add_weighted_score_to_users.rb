class AddWeightedScoreToUsers < ActiveRecord::Migration
  def change
    add_column :users, :weight, :integer, default: 5
  end
end
