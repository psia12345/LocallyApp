class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :host_id, null: false
      t.index :host_id
      t.string :image_url
      t.date :start_date, null: false
      t.datetime :start_time, null: false
      t.date :end_date, null: false
      t.datetime :end_time, null: false
      t.index :start_date
      t.index :start_time
      t.index :end_date
      t.index :end_time
      t.timestamps
    end
  end
end
