class AddCategoryIdtoRepositories < ActiveRecord::Migration
  def change
    add_column :repositories, :category_id, :integer, null: false
  end
end
