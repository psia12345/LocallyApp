json.partial! "api/users/user", user: @user
json.attending_events @user.attending_events
