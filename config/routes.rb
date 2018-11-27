Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update] do
      get 'bookings/userBookings', to: 'bookings#userBookings'
      get 'bookings/hostBookings', to: 'bookings#hostBookings'
      get 'homes/user_index', to: 'homes#user_index'
      get 'likes/user_index', to: 'likes#user_index'
    end
    resource :session, only: [:create, :destroy]
    resources :homes
    resources :bookings, only: [:create, :update, :destroy, :show]
    resources :reviews
    resources :searches, only: [:create, :index, :show]
    resources :likes

  end
end
