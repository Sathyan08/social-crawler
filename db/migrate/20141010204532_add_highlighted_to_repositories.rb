class AddHighlightedToRepositories < ActiveRecord::Migration
  def change
    add_column :repositories, :highlighted, :boolean, default: false
  end
end
