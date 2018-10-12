class Api::HomesController < ApplicationController
  def index
    @homes = current_user.homes
    debugger
  end

  def show
    @home = Home.find(params[:id])
  end

  def create
    @home = Home.new(home_params)
    if @home.save
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def update
    @home = Home.find(params[:homeId])
    if @home.update(home_params)
      render :show
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def destroy
    @home = Home.find(params[:homeId])
    if @home.delete
      render json: ["Deleted home"], status: 200
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  private

  def home_params
    params.require(:home).permit(:status, :lng, :lat, :beds, :baths,
      :bedrooms, :internet, :washer, :dryer, :guests, :home_type,
      :street_address, :city, :state, :zipcode)
  end
end
