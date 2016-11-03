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
    @event = Event.new(event_params)
    if @event.save
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
    params.require(:event).permit(:title, :description, :host_id, :start_date_time, :end_date_time, :image_url)
  end
end
