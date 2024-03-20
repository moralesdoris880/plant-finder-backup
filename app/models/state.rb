class State < ApplicationRecord
    has_many :zipcodes
    has_many :plants, through: :zipcodes
end
