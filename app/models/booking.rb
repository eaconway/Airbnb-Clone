# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  home_id    :integer          not null
#  guest_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  guests     :integer          default(1), not null
#

class Booking < ApplicationRecord
  validates :home_id, :guests, :guest_id, :start_date, :end_date, presence: true

  belongs_to :guest,
    foreign_key: :home_id,
    class_name: :Home

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
