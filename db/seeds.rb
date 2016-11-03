# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User seed database
# User.create({email: 'test@gmail.com', password: 'password'})
# User.create({email: 'test2@gmail.com', password: 'password'})
# User.create({email: 'test3@gmail.com', password: 'password'})

#Event seed database
Event.create({title: "Weekend Book Sale",
  description: "Finding home for these gently used classic novels.",
  host_id: 1,
  image_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTu163ah8pnU3-WYhHVgSnAceds3eC0GRY9A1fpHnntJ0LQXTRSdw',
  start_date_time: "2016-11-11 08:00",
  end_date_time: "2016-11-20 16:00"
})
Event.create({title: "Spring Cleaning",
  description: "Check these stuff out!",
  host_id: 2,
  image_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTu163ah8pnU3-WYhHVgSnAceds3eC0GRY9A1fpHnntJ0LQXTRSdw',
  start_date_time: "2016-11-11 08:00",
  end_date_time: "2016-11-20 16:00"
})
Event.create({title: "Another garage sale",
  description: "Many items for sale!",
  host_id: 3,
  image_url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTu163ah8pnU3-WYhHVgSnAceds3eC0GRY9A1fpHnntJ0LQXTRSdw',
  start_date_time: "2016-11-4 08:00",
  end_date_time: "2016-11-6 16:00"
})
Event.create({title: "Election Sale",
  description: "To celebrate the Election.",
  host_id: 1,
  start_date_time: "2016-11-7 08:00",
  end_date_time: "2016-11-7 16:00"
})
Event.create({title: "Electronic Gadgets",
  description: "Awesome gadgets",
  host_id: 2,
  image_url: '',
  start_date_time: "2016-11-11 08:00",
  end_date_time: "2016-11-20 16:00"
})
