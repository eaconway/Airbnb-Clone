# == Schema Information
#
# Table name: users
#
#  id               :bigint(8)        not null, primary key
#  email            :string           not null
#  password_digest  :string           not null
#  session_token    :string           not null
#  host_rating      :float
#  guest_rating     :float
#  host_description :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  fname            :string           not null
#  lname            :string           not null
#  birthday         :date             not null
#  host_status      :boolean          default(FALSE), not null
#

class User < ApplicationRecord
  validates :email, :fname, :lname, :birthday, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, uniqueness: true

  after_initialize :ensure_session_token

  attr_reader :password

  has_many :hostings,
    foreign_key: :host_id,
    class_name: :Hosting,
    dependent: :destroy

  has_many :homes,
    through: :hostings,
    source: :home

  has_many :trips,
    foreign_key: :home_id,
    class_name: :Booking

  has_many :authored_reviews,
    foreign_key: :author_id,
    class_name: :Review

  has_one_attached :profile_pic

  def self.find_by_credentials(email,password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end
end
