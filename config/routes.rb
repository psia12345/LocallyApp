Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :events, only: [:index, :create, :update, :destroy, :show]
    resources :event_attendees, only: [:create, :show]
    resources :event_interested, only: [:create, :show]
    resources :events do
      delete :remove_attendee
      delete :remove_interested
    end
  end
  root 'static_pages#root'
end
