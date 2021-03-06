# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161103175201) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "category_event_join_tables", force: :cascade do |t|
    t.integer  "event_id",    null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["category_id"], name: "index_category_event_join_tables_on_category_id", using: :btree
    t.index ["event_id"], name: "index_category_event_join_tables_on_event_id", using: :btree
  end

  create_table "event_attendee_join_tables", force: :cascade do |t|
    t.integer  "event_id",    null: false
    t.integer  "attendee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["attendee_id"], name: "index_event_attendee_join_tables_on_attendee_id", using: :btree
    t.index ["event_id"], name: "index_event_attendee_join_tables_on_event_id", using: :btree
  end

  create_table "event_interested_join_tables", force: :cascade do |t|
    t.integer  "event_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_event_interested_join_tables_on_event_id", using: :btree
    t.index ["user_id"], name: "index_event_interested_join_tables_on_user_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "title",           null: false
    t.text     "description",     null: false
    t.integer  "host_id",         null: false
    t.string   "image_url"
    t.datetime "start_date_time", null: false
    t.datetime "end_date_time",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["end_date_time"], name: "index_events_on_end_date_time", using: :btree
    t.index ["host_id"], name: "index_events_on_host_id", using: :btree
    t.index ["start_date_time"], name: "index_events_on_start_date_time", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
