# == Schema Information
#
# Table name: hostings
#
#  id         :bigint(8)        not null, primary key
#  host_id    :integer          not null
#  home_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Hosting < ApplicationRecord
  validates :home_id, :host_id, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
