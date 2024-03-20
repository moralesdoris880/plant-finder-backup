class Zipcode < ApplicationRecord
    belongs_to :state
    has_many :plants
end
