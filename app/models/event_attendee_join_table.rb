class EventAttendeeJoinTable < ApplicationRecord
  validates :event_id, :attendee_id, presence: true
  validates :attendee_id, uniqueness: {scope: :event_id, message: "already attending this event!"}

  #write validation method to check if attending_user is host
  belongs_to :attending_event,
    class_name: :Event,
    foreign_key: :event_id
  belongs_to :attendee,
    class_name: :User,
    foreign_key: :attendee_id
end
