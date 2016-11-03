class EventInterestedJoinTable < ApplicationRecord
  validates :event_id, :user_id, presence: true
  validates :user_id, uniqueness: {scope: :event_id,
    message: "already interested in this event!"}


  #write validation method to check if interested_user is host

  #write validation method to check if interested_user is already attending

  belongs_to :interested_event,
    class_name: :Event,
    foreign_key: :event_id
  belongs_to :interested_users,
    class_name: :User,
    foreign_key: :user_id
end
