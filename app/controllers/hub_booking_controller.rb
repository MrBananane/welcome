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
    begin
      @calendar_list = @service.list_calendar_lists
      event_list = @service.list_events(@calendar_list.items.detect{|x| x.summary == "Direction HUB"}.id,
                                        max_results: 20,
                                        single_events: true,
                                        order_by: "startTime",
                                        time_min: (Time.now - 0.days).at_beginning_of_day.iso8601
                                       ).items
    rescue Google::Apis::AuthorizationError => exception
      response = @client.refresh!
      session[:authorization] = session[:authorization].merge(response)
      retry
    end

    @events = event_list.select{|item| item.color_id != '9'}
    @bookings = event_list.select{|event| event.color_id == '9' and event.start.date_time.beginning_of_day == (DateTime.now + 0.days).beginning_of_day}
    I18n.default_locale = :fr
    ajd = I18n.l Time.now
    ajd = ajd.split
    @histories = LockerHistory.all.last(6)
    @histories.each do |hist|
      puts LockerUser.select(:F_Name, :L_Name, :NFC_tag).where(id: hist.user_id).try(:F_Name)
    end
    @presents = User.where(is_present: true)
  end

  def update_presents
    @presents = User.where(is_present: true)
  end

  def events
    @event_list = @service.list_events(params[:calendar_id])
  end

  private
  def create_google_client
    @client = Signet::OAuth2::Client.new(
      {
        client_id: Rails.application.secrets.google_client_id,
        client_secret: Rails.application.secrets.google_client_secret,
        token_credential_uri: 'https://accounts.google.com/o/oauth2/token'
      })
    @client.update!(session[:authorization])
    @service = Google::Apis::CalendarV3::CalendarService.new
    @service.authorization = @client
  end
end
