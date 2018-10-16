class AddGuestsToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :guests, :integer, null: false, default: 1
  end
end
