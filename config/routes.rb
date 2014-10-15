Rails.application.routes.draw do

  root "static_pages#home"
  get "/auth/:provider/callback", to: "sessions#create"
  get "/signout", to: "sessions#destroy", as: :signout

  resources :sessions, only: [:new, :create, :destroy]
  resources :collaborations, only: [:show, :edit, :update]

  resources :users, only: [:show] do
    resources :reviews, only: [:create, :update]
    resources :repositories, only: [:index]
  end
end
