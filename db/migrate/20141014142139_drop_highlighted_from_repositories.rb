class DropHighlightedFromRepositories < ActiveRecord::Migration
  def up
    remove_column :repositories, :highlighted
  end

  def down
    add_column :repositories, :highlighted, :boolean, default: false
  end
end
