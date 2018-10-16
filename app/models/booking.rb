class Booking < ApplicationRecord
  validates :home_id, :guest_id, :start_date, :end_date, presence: true

  belongs_to :guest,
    foreign_key: :home_id,
    class_name: :Home

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
