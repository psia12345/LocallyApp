class Api::EventInterestedController < ApplicationController
  def show
    @event_interested = EventInterestedJoinTable.find(params[:id])
    @event = @event_interested.event
    render 'api/events/show'
  end

  def create
    @event = Event.find(params[:event_interested][:event_id])
    @event_interested = EventInterestedJoinTable.new(event_interested_params)
    unless @event.interested_user_ids.include?(current_user.id)
      @event_interested.save
    end
    @interested_id = @event.interested_user_ids
    render 'api/events/show'
  end

  # def destroy
  #   @event = Event.find(params[:event_interested][:event_id])
  #   id = params[:event_interested][:attendee_id].to_i
  #   if @event.interested_user_ids.include?(id)
  #     ids = @event.interested_user_ids - id
  #     @event.interested_user_ids = ids
  #   end
  #   render 'api/events/show'
  # end

  private
  def event_interested_params
    params.require(:event_interested).permit(:event_id, :user_id)
  end


end
