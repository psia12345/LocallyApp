class CategoryEventJoinTable < ApplicationRecord
  validates :event_id, :category_id, presence: true
  validates :category_id, uniqueness: {scope: :event_id,
    message: "already has this event."}

  belongs_to :category
  belongs_to :event
end
