class CreateCategoryEventJoinTables < ActiveRecord::Migration[5.0]
  def change
    create_table :category_event_join_tables do |t|
      t.integer :event_id, null: false
      t.index :event_id
      t.integer :category_id, null: false
      t.index :category_id
      t.timestamps
    end
  end
end
