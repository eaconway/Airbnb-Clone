class Api::LikesController < ApplicationController
  def index
    @likes = Like.all
    render :index
  end

  def userIndex
    @likes = Like.where(user_id: current_user.id)
    render :index
  end

  def create
    @like = Like.new(like_params)

    if @like.save
      render :show
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def show
    @like = Like.find(params[:id])
    render :show
  end

  def destroy
    @like = Like.find(params[:id])

    if @like.delete
      render json: ["Deleted like"], status: 200
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :home_id)
  end
end
