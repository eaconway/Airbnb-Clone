class Api::BookingsController < ApplicationController
  def index
    @bookings = Booking.where(guest_id: current_user.id)
    render :index
  end

  def userBookings
    @bookings = Booking.where(guest_id: current_user.id)
      .or(Booking.where(home_id: current_user.homes))
      .includes(:home)
    @homes = @bookings.map{|booking| booking.home}
    render :index
  end

  def hostBookings
    @bookings = Booking.where(home_id: current_user.homes)
    render :index
  end

  def create
    @booking = Booking.new(booking_params)

    @booking.guest_id = current_user.id
    if @booking.save
      @home = @booking.home
      render :show
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def show
    @booking = Booking.find(params[:id])
    @home = @booking.home
  end

  def update
    @booking = Booking.find(params[:id])
    
    if @booking.update(booking_params)
      @home = @booking.home
      render :show
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  def destroy
    @booking = Booking.find(params[:id])

    if @booking.delete
      render json: ["Successfully Deleted"], status: 200
    else
      render json: @booking.errors.full_messages, status: 404
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:homeId, :startDate,
      :endDate, :guests, :start_date, :end_date, :home_id, :guest_id).transform_keys!(&:underscore)
  end

end
