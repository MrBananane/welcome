Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/redirect', to: 'hub_booking#redirect', as: 'redirect'
  get '/callback', to: 'hub_booking#callback', as: 'callback'
  get '/calendars', to: 'hub_booking#calendars', as: 'calendars'
end
