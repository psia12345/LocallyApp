class CreateEventAttendeeJoinTables < ActiveRecord::Migration[5.0]
  def change
    create_table :event_attendee_join_tables do |t|
      t.integer :event_id, null: false
      t.index :event_id
      t.integer :attendee_id, null: false
      t.index :attendee_id
      t.timestamps
    end
  end
end
