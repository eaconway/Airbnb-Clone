class Review < ApplicationRecord
  validates :author_id, :home_id, :body, :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :home,
    foreign_key: :home_id,
    class_name: :Home
end
