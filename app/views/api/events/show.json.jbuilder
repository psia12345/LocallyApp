json.partial! "api/events/event", event: @event
json.email @event.user.email
json.attendees @event.attendees
json.attendee_ids @attendee_ids
json.categories @event.tag_categories
json.interested_ids @event.interested_user_ids
json.interested @event.interested_users
