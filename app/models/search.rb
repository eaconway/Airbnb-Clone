class Search < ApplicationRecord

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
