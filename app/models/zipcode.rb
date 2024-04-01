class Zipcode < ApplicationRecord
    belongs_to :state
    has_many :plant_joins
    has_many :plants, through: :plant_joins
end
