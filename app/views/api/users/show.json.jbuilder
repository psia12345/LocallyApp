json.partial! "api/users/user", user: @user
json.attending_events @user.attending_events
json.interested_events @user.interested_events
json.host_events @user.host_events
