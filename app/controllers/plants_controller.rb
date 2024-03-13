class PlantsController < ApplicationController
    # list all plants
    def index
        plants = Plant.all
        render json: plants
    end

    # searches a plant by id 
    def show 
        plant = Plant.find_by(id: params[:id])
        if plant
            render json: plant
        end 
    end

end