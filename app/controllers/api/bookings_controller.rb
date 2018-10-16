class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.where(guest_id: current_user.id)
    render :index
  end

  def userBookings
    @bookings = Booking.where(guest_id: current_user.id).or(Booking.where(home_id: current_user.homes))
    render :index
  end

  def hostBookings
    @bookings = Booking.where(home_id: current_user.homes)
    render :index
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def update
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.update(booking_params)
      render json: ["Successfully Deleted"], status: 200
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:guest_id, :home_id, :start_date,
      :end_date).transform_keys!(&:underscore)
  end

end
