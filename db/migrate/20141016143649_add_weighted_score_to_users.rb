class AddWeightedScoreToUsers < ActiveRecord::Migration
  def change
    add_column :users, :weight, :float, default: 5
  end
end
