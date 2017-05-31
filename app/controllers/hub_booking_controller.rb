class HubBookingController < ApplicationController
  before_action :create_google_client, only: [:calendars, :events]

  def redirect
    client = Signet::OAuth2::Client.new(
      {
        client_id: Rails.application.secrets.google_client_id,
        client_secret: Rails.application.secrets.google_client_secret,
        authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
        scope: Google::Apis::CalendarV3::AUTH_CALENDAR_READONLY,
        redirect_uri: callback_url
      })

    redirect_to client.authorization_uri.to_s
  end

  def callback
    client = Signet::OAuth2::Client.new(
      {
        client_id: Rails.application.secrets.google_client_id,
        client_secret: Rails.application.secrets.google_client_secret,
        token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
        redirect_uri: callback_url,
        code: params[:code]
      })

    response = client.fetch_access_token!
    session[:authorization] = response
    redirect_to calendars_url
  end

  def calendars
    @calendar_list = @service.list_calendar_lists
  end

  def events
    @event_list = @service.list_events(params[:calendar_id])
  end

  private
  def create_google_client
    client = Signet::OAuth2::Client.new(
      {
        client_id: Rails.application.secrets.google_client_id,
        client_secret: Rails.application.secrets.google_client_secret,
        token_credential_uri: 'https://accounts.google.com/o/oauth2/token'
      })
    client.update!(session[:authorization])
    @service = Google::Apis::CalendarV3::CalendarService.new
    @service.authorization = client
  end
end
