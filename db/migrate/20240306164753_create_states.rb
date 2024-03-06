class CreateStates < ActiveRecord::Migration[7.0]
  def change
    create_table :states do |t|
      t.string :name
      t.strings :zipcode_array
      t.timestamps
    end
  end
end
