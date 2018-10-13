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

ActiveRecord::Schema.define(version: 2018_10_13_020123) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "homes", force: :cascade do |t|
    t.string "status", default: "active", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zipcode"
    t.integer "beds", null: false
    t.integer "baths", null: false
    t.integer "bedrooms", null: false
    t.integer "internet", default: 0, null: false
    t.integer "washer", default: 0, null: false
    t.integer "dryer", default: 0, null: false
    t.integer "guests", default: 1, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "home_type", null: false
    t.string "title", default: "", null: false
    t.integer "price", default: 0, null: false
    t.index ["city"], name: "index_homes_on_city"
    t.index ["state"], name: "index_homes_on_state"
  end

  create_table "hostings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "home_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["home_id"], name: "index_hostings_on_home_id", unique: true
    t.index ["host_id"], name: "index_hostings_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.float "host_rating"
    t.float "guest_rating"
    t.text "host_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.date "birthday", null: false
    t.boolean "host_status", default: false, null: false
    t.index ["email"], name: "index_users_on_email"
  end

end
