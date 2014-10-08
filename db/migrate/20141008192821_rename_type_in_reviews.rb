class RenameTypeInReviews < ActiveRecord::Migration
  def up
    rename_column :reviews, :type, :category
  end

  def down
    rename_column :reviews, :category, :type
  end
end
