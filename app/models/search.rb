class Search < ApplicationRecord
  validates :author_id, :query, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
end
