DietDonate::Application.routes.draw do
  root to: "landing_pages#index"

  match '/app', :to => redirect('/index.html')

  get '/coming_soon', :to => "landing_pages#coming_soon", as: :coming_soon
end
