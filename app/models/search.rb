# == Schema Information
#
# Table name: searches
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  query      :string
#  author_id  :integer
#

class Search < ApplicationRecord

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
