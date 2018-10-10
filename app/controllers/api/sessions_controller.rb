class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render :show
    else
      render json: ["Incorrect username or password"], status: 400
    end
  end

  def destroy
    logout!
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
