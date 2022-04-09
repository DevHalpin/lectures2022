Rails.application.routes.draw do
  resources :publishers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get 'profile', to: 'users#show'
  resources :authors do
    resources :books
  end

  # resources :authors, only: [:show, :index, :new ]
  # resources :authors, except: [:show, :index, :new ]

  # resources :books
end
