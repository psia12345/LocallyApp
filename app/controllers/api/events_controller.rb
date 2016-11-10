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
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :host_id, :image_url, :categories, :start_date, :start_time, :end_date, :end_time, :end_date_time, :start_date_time)
  end
end
