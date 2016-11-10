class Api::EventAttendeesController < ApplicationController
  def show
    @event_attendee = EventAttendeeJoinTable.find(params[:id])
    @event = @event_attendee.event
    render 'api/events/show'
  end

  def create
    @event = Event.find(params[:event_attendee][:event_id])
    id = params[:event_attendee][:attendee_id].to_i
    @event_attendee = EventAttendeeJoinTable.new(event_attendee_params)
    unless @event.attendee_ids.include?(id)
      @event_attendee.save
      @attendee_ids = @event.attendee_ids
      render 'api/events/show'
    end
  end

  def destroy
    # @event = Event.find(params[:event_attendee][:event_id])
    # id = params[:event_attendee][:attendee_id].to_i
    # if @event.attendee_ids.include?(id)
    #   ids = @event.attendee_ids
    #
    # end
  end

  private
  def event_attendee_params
    params.require(:event_attendee).permit(:event_id, :attendee_id)
  end
end
