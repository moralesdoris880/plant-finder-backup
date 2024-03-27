class CreatePlantJoins < ActiveRecord::Migration[7.0]
  def change
    create_table :plant_joins do |t|
      t.references :plant, foreign_key: true
      t.references :zipcode, foreign_key: true 
      t.timestamps
    end
    add_index :plant_joins, [:plant_id, :zipcode_id], unique: true
  end
end
