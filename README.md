# Locally

[Locally live][heroku]

[heroku]: https://locallyapp.herokuapp.com/

Locally is a full-stack web application inspired by Eventbrite.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Event Rendering/Editing

  The events information are stored in one table on datebase side, which contains column for `id`, `title`, `description`, `host_id`, `image_url`, `start_date_time`, `end_date_time`,  `created_at`, `updated_at`. The visitors to this site is able to view information for all available events and categorize by category. Upon login, users are able to bookmark the events and register for the event.

  Upon login, user can create new events. Users can also browse, bookmark events, and register for events. These events will show up on User's show page, which can be navigated from nav bar on the top right corner.

### Registering and Bookmarking events
  Logged in users can register for events, which will show up on User's show page. User can also saved an event, which will show up on users' show page under saved events.

### Category

As events can be tagged with categories either at the time of event creation or upon updating events. The categories are associated with events through a join table. The `category` table contains `id` and `name` for the category.
There are categories on home page, which user can navigate quickly to look for category specific events.


## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for Locally are outlined below.

### Search

Searching notes is a standard feature of Eventbrite. This search will look go through categories, event titles, and event content.

### Map Integration

Map Integration is also another standard feature of Eventbrite. This feature will allow users to filter events based on location and distance in addition to other search parameters.
