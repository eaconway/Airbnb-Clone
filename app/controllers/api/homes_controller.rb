class Api::HomesController < ApplicationController
  def index
    if params[:filters]
      @homes = bounds ? Home.in_bounds(bounds) : Home.all
    else
      @homes = Home.all
    end
  end

  def user_index
    @homes = current_user.homes
    render :index
  end

  def show
    @home = Home.find(params[:id])
    @bookings = Booking.where(home_id: @home.id)
    @reviews = Review.where(home_id: @home.id)
  end

  def create
    @home = Home.new(home_params)

    if @home.save
      Hosting.create(host_id: current_user.id, home_id: @home.id)
      render :showMin
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def update
    @home = Home.find(params[:home][:id])
    if @home.update(home_params)
      render :showMin
    else
      render json: @home.errors.full_messages, status: 422
    end
  end

  def destroy
    @home = Home.find(params[:id])
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
      :street_address, :city, :state, :zipcode, :image, :price, :title,
      :description, :extra_info).transform_keys!(&:underscore)
  end

  def bounds
    params[:filters][:bounds]
  end
end
