class CreatePlants < ActiveRecord::Migration[7.0]
  def change
    create_table :plants do |t|
      t.string :scientific_name
      t.string :common_name
      t.string :skill_level
      t.string :origin
      t.string :usda_pdf
      t.boolean :drought_tolerant
      t.boolean :fruiting_species
      t.boolean :shade_producing
      t.boolean :wetland_species
      t.string :zipcode_ids
      t.string :state_id
      t.timestamps
    end
  end
end
