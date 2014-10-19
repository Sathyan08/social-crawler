class StaticPagesController < ApplicationController
  def home
    if current_user
      redirect_to user_path(current_user)
    end

    redirect_to "/about"
  end

  def about
  end

  def scale
  end
end
