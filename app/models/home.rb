# == Schema Information
#
# Table name: homes
#
#  id             :bigint(8)        not null, primary key
#  status         :string           default("active"), not null
#  lng            :float            not null
#  lat            :float            not null
#  street_address :string
#  city           :string
#  state          :string
#  zipcode        :integer
#  guests         :integer          default(1), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  home_type      :string           not null
#  title          :string           default(""), not null
#  price          :integer          default(0), not null
#  description    :text
#  extra_info     :text
#  beds           :integer          default(0)
#  baths          :integer          default(0)
#  bedrooms       :integer          default(0)
#  internet       :boolean          default(FALSE)
#  washer         :boolean          default(FALSE)
#  dryer          :boolean          default(FALSE)
#

class Home < ApplicationRecord
  validates :status, :lng, :lat, :beds, :baths, :bedrooms,
    :guests, :home_type, :title, :price, presence: true

  # validate :ensure_image

  has_one :hosting,
    foreign_key: :home_id,
    class_name: :Hosting

  has_one :owner,
    through: :hosting,
    source: :host

  has_many :bookings,
    foreign_key: :home_id,
    class_name: :Booking

  has_many :reviews,
    foreign_key: :home_id,
    class_name: :Review

  has_one_attached :image

  def ensure_image
    unless self.image.attached?
      errors[:image] << 'Must be attached'
    end
  end

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end
end
