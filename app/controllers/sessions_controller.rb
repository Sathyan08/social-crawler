class SessionsController < ApplicationController
  def create
    auth = request.env["omniauth.auth"]
    binding.pry
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    session[:user_id] = user.id
    session[:access_token] = omniauth_token
    redirect_to user_path(current_user), notice: "Signed in!"
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Signed out!"
  end

  private

  def auth_hash
    request.env["omniauth.auth"]
  end

  def omniauth_token
    auth_hash["credentials"]["token"]
  end
end
