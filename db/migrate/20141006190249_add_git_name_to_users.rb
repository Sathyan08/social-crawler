class AddGitNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :gitname, :string
  end
end
