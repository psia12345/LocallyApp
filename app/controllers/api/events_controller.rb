class Api::EventsController < ApplicationController
  def new
    #can probably ignore new method
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

  def index
    @events = Event.all
  end

  def create
    debugger
    @event = Event.new(event_params)
    @event.start_date_time = "#{params[:event][:start_date]} #{params[:event][:start_time]}".to_datetime
    @event.end_date_time = "#{params[:event][:end_date]} #{params[:event][:end_time]}".to_datetime
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    @event.start_date_time = params[:event][:start_date] + params[:event][:start_time]
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def delete
    @event = Event.find_by_id(params[:id])
    if @event.user == current_user
      @event.destroy
      render :index
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :host_id, :image_url, :categories, :start_date, :start_time, :end_date, :end_time, :end_date_time)
  end
end
