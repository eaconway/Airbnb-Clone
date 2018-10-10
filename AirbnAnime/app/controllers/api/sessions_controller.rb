class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render :errors
    end
  end

  def destroy
    logout!
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
