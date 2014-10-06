class UsersController < ApplicationController

  def show
    @user = current_user
    # variable = current_user.name
    # # binding.pry
    # user = Octokit.user "#{current_user.name}"
  end
end
