# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer          not null
#  home_id    :integer          not null
#  body       :text             default(""), not null
#  rating     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :author_id, :home_id, :body, :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
