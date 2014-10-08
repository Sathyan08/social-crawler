Rails.application.routes.draw do

  root "static_pages#home"
  get "/auth/:provider/callback", to: "sessions#create"
  get "/signout", to: "sessions#destroy", as: :signout

  resources :users, only: [:show] do
    resources :reviews, only: [:create, :update]
  end
end
