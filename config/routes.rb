Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/redirect', to: 'hub_booking#redirect', as: 'redirect'
  get '/callback', to: 'hub_booking#callback', as: 'callback'
  get '/calendars', to: 'hub_booking#calendars', as: 'calendars'
  get 'events/:calendar_id', to: 'hub_booking#events', as: 'events', calendar_id: /[^\/]+/
end
