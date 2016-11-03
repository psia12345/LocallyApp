class CreateEventInterestedJoinTables < ActiveRecord::Migration[5.0]
  def change
    create_table :event_interested_join_tables do |t|
      t.integer :event_id, null: false
      t.index :event_id
      t.integer :user_id, null: false
      t.index :user_id
      t.timestamps
    end
  end
end
