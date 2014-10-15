class AddHighlightingtoCollaborations < ActiveRecord::Migration
  def change
    add_column :collaborations, :highlighted, :boolean, default: false
  end
end
