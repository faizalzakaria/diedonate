DietDonate::Application.routes.draw do
  devise_for :users, :controllers => {
    :omniauth_callbacks => "users/omniauth_callbacks",
    :registrations      => "users/registrations"
  }

  root to: "landing_pages#index"

  get '/coming_soon', :to => "landing_pages#coming_soon", as: :coming_soon
end
