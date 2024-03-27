class Plant < ApplicationRecord
    has_many :plant_joins
    has_many :zipcodes, through: :plant_joins
end
