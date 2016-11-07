class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :category_event_join_tables, dependent: :destroy
  has_many :events, through: :category_event_join_tables

end
