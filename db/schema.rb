# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_03_27_153259) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "plant_joins", force: :cascade do |t|
    t.bigint "plant_id"
    t.bigint "zipcode_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["plant_id", "zipcode_id"], name: "index_plant_joins_on_plant_id_and_zipcode_id", unique: true
    t.index ["plant_id"], name: "index_plant_joins_on_plant_id"
    t.index ["zipcode_id"], name: "index_plant_joins_on_zipcode_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "scientific_name"
    t.string "common_name"
    t.string "skill_level"
    t.string "usda_pdf"
    t.string "group"
    t.boolean "drought_tolerant"
    t.boolean "fruiting_species"
    t.boolean "shade_producing"
    t.boolean "shade_tolerant"
    t.boolean "wetland_species"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "states", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "zipcodes", force: :cascade do |t|
    t.integer "code_number"
    t.bigint "state_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["state_id"], name: "index_zipcodes_on_state_id"
  end

  add_foreign_key "plant_joins", "plants"
  add_foreign_key "plant_joins", "zipcodes"
  add_foreign_key "zipcodes", "states"
end
