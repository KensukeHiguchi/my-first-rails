Rails.application.routes.draw do
  resources :articles

  # root 'welcome#index'
  root 'comments#index'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, format: 'json' do
    namespace :v1  do
      resources :articles
    end
  end
end
