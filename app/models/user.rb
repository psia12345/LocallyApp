class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password
  after_initialize :set_session_token

  def self.find_by_credentials(email, password)
    potential_user = User.find_by_email(email)
    return nil unless potential_user && potential_user.is_password?(password)
    return potential_user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def set_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
  end
end
