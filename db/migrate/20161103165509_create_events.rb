class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :host_id, null: false
      t.index :host_id
      t.string :image_url
      t.datetime :start_date_time, null: false
      t.datetime :end_date_time, null: false
      t.index :start_date_time
      t.index :end_date_time
      t.timestamps
    end
  end
end
