class AddRoleAndDescriptionToCollaborations < ActiveRecord::Migration
  def change
    add_column :collaborations, :role, :string
    add_column :collaborations, :description, :text
  end
end
