Rails.application.routes.draw do
  resources :plants, only: [:index,:show]
  resources :states
  resources :zipcodes
  get '/plants', to: 'plants#index'
  get '/plant', to: 'plants#show'
end
