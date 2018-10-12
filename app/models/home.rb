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
#  beds           :integer          not null
#  baths          :integer          not null
#  bedrooms       :integer          not null
#  internet       :integer          default(0), not null
#  washer         :integer          default(0), not null
#  dryer          :integer          default(0), not null
#  guests         :integer          default(1), not null
#  type           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Home < ApplicationRecord
  validates :status, :lng, :lat, :beds, :baths, :bedrooms, :internet,
    :washer, :dryer, :guests, :home_type, presence: true

  has_one :hosting,
    foreign_key: :home_id,
    class_name: :Hosting

  has_one :owner,
    through: :hosting,
    source: :host

  has_one_attached :image
end
