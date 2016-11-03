class Event < ApplicationRecord
  validates :title, :description, :host_id, :start_date_time, :end_date_time, presence: true
  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :host_id
end
