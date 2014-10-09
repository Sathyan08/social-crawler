class AddAvatartoUsers < ActiveRecord::Migration
  def change
    add_column :users, :git_avatar, :string
    add_column :users, :email, :string
    add_column :users, :p_linked, :boolean, default: false
    add_column :users, :logged, :boolean, default: false
    add_column :users, :stack_overflow, :boolean, default: false
  end
end
