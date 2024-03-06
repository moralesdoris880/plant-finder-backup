class Zipcode < ApplicationRecord
    belongs_to :State
    has_many :plants
end
