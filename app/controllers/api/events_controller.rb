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

    else

    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    if @event.update(event_params)

    else

    end
  end

  def delete
    @event = Event.find_by_id
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :host_id, :start_date_time, :end_date_time, :image_url)
  end
end
