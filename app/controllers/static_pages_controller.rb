class StaticPagesController < ApplicationController
  def home
    if current_user
      redirect_to user_path(current_user)
    else
      redirect_to "/about"
    end
  end

  def about
  end

  def scale
  end
end
