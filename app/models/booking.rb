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

  validate :start_must_come_before_end
  validate :does_not_overlap_bookings


  belongs_to :guest,
    foreign_key: :home_id,
    class_name: :Home

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home

  def overlapping_bookings
    Booking
      .where.not(id: self.id)
      .where(home_id: home_id)
      .where.not('start_date >= :end_date OR end_date <= :start_date',
        start_date: start_date, end_date: end_date)
  end

  def does_not_overlap_bookings
   unless overlapping_bookings.empty?
     errors[:base] <<
       'Booking conflicts with existing booking'
   end
 end

 def start_must_come_before_end
   return if start_date < end_date
   errors[:start_date] << 'must come before end date'
   errors[:end_date] << 'must come after start date'
 end

 def future_date
   today = Date.today
   return if today <= start_date
   errors[:start_date] << 'must come on/after current day'
 end
end
