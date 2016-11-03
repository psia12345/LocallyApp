class Category < ApplicationRecord
  validates :name, presence: true

  has_many :category_event_join_tables
  has_many :events, through: :category_event_join_tables

end
