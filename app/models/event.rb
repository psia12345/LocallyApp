class Event < ApplicationRecord
  attr_accessor  :categories

  validates :title, :description, :host_id, :start_date, :start_time, :end_date, :end_time, presence: true

  has_many :category_event_join_tables, dependent: :destroy
  has_many :categories,
    through: :category_event_join_tables,
    class_name: :Category

  has_many :event_attendee_join_tables, dependent: :destroy
  has_many :attendees,
    through: :event_attendee_join_tables

  has_many :event_interested_join_tables, dependent: :destroy
  has_many :interested_users,
  through: :event_interested_join_tables

  #event host shouldn't be attendee and those who are interested also shouldn't be attendee

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :host_id
end
