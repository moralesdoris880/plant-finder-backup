class CreateZipcodes < ActiveRecord::Migration[7.0]
  def change
    create_table :zipcodes do |t|
      t.integer :code_number
      t.references :state, foreign_key: true
      t.timestamps
    end
  end
end
