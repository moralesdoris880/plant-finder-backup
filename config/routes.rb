Rails.application.routes.draw do
  resources :plants
  resources :states
  resources :zipcodes
  get '/plants', to: 'plants#index'
  get '/plant', to: 'plants#show'
end
