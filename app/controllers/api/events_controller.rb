class Api::EventsController < ApplicationController
  def new
    #can probably ignore new method
  end

  def show
    @event = Event.find_by_id(params[:id])
    @attendee_ids = @event.attendee_ids
  end

  def index
    @events = Event.all
    # # params = { category: '1',
    # #   city: 'London',
    # #   country: 'GB',
    # #   status: 'upcoming',
    # #   format: 'json',
    # #   page: '50'}
    # meetup_api = MeetupApi.new
    # # @events = meetup_api.open_events(params)
    # # meetup_api = MeetupApi.new
    # # debugger
    # # @events = meetup_api.categories({})
    # params = { status: 'upcoming', format: 'json', page: '10', zip: '94539'}
    # @events = meetup_api.open_events(params)
    # debugger
  end

  def create
    @event = Event.new(event_params)
    category_ids = params[:event][:categories].map do |category|
      Category.find_by_name(category).id
    end
    # @event.start_date_time = "#{params[:event][:start_date]} #{params[:event][:start_time]}"
    # @event.end_date_time = "#{params[:event][:end_date]} #{params[:event][:end_time]}"
    if @event.save
      @event.tag_category_ids = category_ids
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    if @event.user == current_user
      @event.destroy
    else
      render json: @event.errors.full_messages, status: 422
    end
    render :index
  end

  def remove_attendee
    @event = Event.find(params[:event_id])
    @attendee_ids = @event.attendee_ids
    new_id = @attendee_ids - [current_user.id]
    @event.attendee_ids = new_id
    render :show
  end

  def remove_interested
    @event = Event.find(params[:event_id])
    @interested_ids = @event.interested_user_ids
    new_id = @interested_ids - [current_user.id]
    @event.interested_user_ids = new_id
    render :show
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :host_id, :image_url, :categories, :start_date, :start_time, :end_date, :end_time, :end_date_time, :start_date_time)
  end
end
