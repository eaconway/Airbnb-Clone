class Hosting < ApplicationRecord
  validates :home_id, :host_id, presence: true

  belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
