class Api::EventAttendeesController < ApplicationController
  def show
    @event_attendee = EventAttendeeJoinTable.find(params[:id])
  end

  def create
    @event = Event.find(params[:event_attendee][:event_id])
    id = params[:event_attendee][:attendee_id].to_i
    @event_attendee = EventAttendeeJoinTable.new(event_attendee_params)
    unless @event.attendee_ids.include?(id)
      @event_attendee.save
      render :show
    end
  end

  private
  def event_attendee_params
    params.require(:event_attendee).permit(:event_id, :attendee_id)
  end
end
