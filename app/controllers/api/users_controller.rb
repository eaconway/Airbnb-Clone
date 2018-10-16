class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    unless @user.profile_pic.attached?
      # file = EzDownload.open('https://vignette.wikia.nocookie.net/smosh/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest?cb=20140725081329')
      @user.profile_pic.attach(io: File.open('app/assets/images/pikachu.png'), filename: 'demo.png')
    end

    if @user.save!
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password,
      :birthday, :profile_pic);
  end
end
