# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#User seed database
User.create({email: 'test@gmail.com', password: 'password'})
User.create({email: 'test2@gmail.com', password: 'password'})
User.create({email: 'test3@gmail.com', password: 'password'})

#Event seed database
Event.create({title: "Community Garage Sale",
  description: "Garage Sale Strarts at 7:00 am ends at 2:00 pm
Renting spaces to sell goods
We rent tables at $5.00 each
Each space is $30.00 includes a lunch Ticket
only 50 spaces available",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478766718/Community-Yard-Sale-Press-Release_vjm3ke.jpg',
  start_date_time: "2016-11-12 7:00:00 AM",
  end_date_time: "November 12th, 2016 2:00:00 PM"
})
Event.create({title: "Urban Garage Sale 2016",
  description: "On Nov 26th and 27th a community of artists, makers, and local retailers will set up shop in the Mitchell Park Domes annex building. Urban Garage Sale is an annual event showcasing the creative community of Milwaukee. This year's event will bring together 65 talented local vendors, sound providers and foodies to create an alternative holiday shopping experience in the city of Milwaukee. What better home could this local Milwaukee event have than the iconic Mitchell Park Domes. Moving to the modern annex greenhouse will create a bigger and brighter look the sale. For the first time, Urban Garage Sale will take place over two days and will be open to the public from 10am - 4pm.
Urban Garage Sale is an annual event put on by the local clothing maker Heavy Rotation. Located in Riverwest, Heavy Rotation creates art driven causal clothing for independent retailers and specialty stores worldwide since 2003.
For more Information
http://www.urbangaragesale.com/",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478767048/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25064487_2F182718664675_2F1_2Foriginal_axq0wy.jpg',
  start_date_time: "2016-11-26 10:00:00 AM",
  end_date_time: "November 27th, 2016 4:00:00 PM"
})
Event.create({title: "Bride & Groom Garage Sale",
  description: "Brides, have you been scouring the Pinterest boards looking for just the right item for your wedding?

Newly married ladies and gents, do you have a ton of decorations left over from your wedding taking up space in your closets and basements?

Here is a great opportunity for the two to come together!

Paula Munz Petersen & Stacy Snow (Events by Stacy are hosting the first Bride and Groom Garage Sale in Janesville!


ADMISSION $2 for shoppers. Payment accepted at the door. You can save rsvp by selecting a free ticket now in order to receive updates to the event.

VENDOR COST:
$10 for Brides selling their wedding items / 6 foot table.
$20 for Wedding related businesses. / 6 foot table

We will be selective about the businesses that will be added. If you would like to be considered, please send an email to shopstacysnow@gmail.com",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478767063/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25258030_2F49127062948_2F1_2Foriginal_mxuyy9.jpg',
  start_date_time: "2017-03-26 11:00:00 AM PST",
  end_date_time: "2017-03-26 2:00:00 PM PST"
})
Event.create({title: "HKUST Garage Sale 2016",
  description: "The Summer Garage Sale & Market is run on a non-profit making basis and all surplus funds received from the table hire fees will be donated to charity. It supports the 5-R's (Re-cycle - Re-use - Re-duce - Re-place - Re-think) and the event is open to the general public as well as HKUST staff & their families, students and alumni.

Almost 190 tables in a covered car park selling an exciting wide variety of new & secondhand goods. Great opportunities – something for everyone.

Admission is free.

Parking, Food & Drinks available.",
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478767318/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25465063_2F103205612365_2F1_2Foriginal_imyn6e.jpg',
  host_id: 1,
  start_date_time: "2016-12-03 9:00:00 AM",
  end_date_time: "2016-12-03 2:30:00 PM"
})
Event.create({title: "Electronic Gadgets",
  description: "IT'S THAT TIME OF YEAR AGAIN, GARAGE SALE!
For those of you that may not know what our Garage Sales are all about, here's the deal. We go to Japan and visit knife makers. We visit ones we normally carry, and buy up stock we don't normally bring in, and we visit knife makers we DON'T normally carry and ask them what they have that is impressive. THEN, we bring it all back to you to gawk and drool over. (And for us to gawk and drool over also, to be honest.)
The Garage Sale is about prototypes, knives by new makers, retired samples, budget knives, scratch and dent, and unique one of a kind finds. Most importantly it's a ton of fun!
In store
November 7th, 10:00am – November 13th, close.
 Online at www.knifewear.com
November 7th, 10:00am (MDT, Calgary time)  – November 13th, 11:59pm.

Location: 4215 Main Street, Vancouver, V5V 3P8",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478767451/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25576344_2F174380013873_2F1_2Foriginal_im7kgz.jpg',
  start_date_time: "Mon, 7 Nov 2016, 10:00 AM",
  end_date_time: "Sun, 13 Nov 2016, 6:00 PM"
})
Event.create({title: "Christmas Community Garage Sale Fundraiser 2016",
  description: "A garage sale will be held in the community garden on Wednesday 30th November. Proceeds will go to our 2016 Christmas Hamper Appeal supporting those in need in our community and to the general upkeep of the community garden. Books, plants, bric-a-brac and new and pre-loved goods will be available for sale at bargain prices,
A sausage sizzle will also be available to cater for hungry bargain hunters.
Thank you for your support!",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478767932/https-_2F_2Fcdn.evbuc.com_2Fimages_2F24809645_2F109903364723_2F1_2Foriginal_nypj1u.jpg',
  start_date_time: "30 Nov 2016, 10:00 AM PST",
  end_date_time: "30 Nov 2016, 2:00 PM PST"
})
Event.create({title: "Billings Biggest Garage Sale 6/24/17",
  description: "Don't toss or donate just yet!  Save your stuff & sell it at Billings Biggest Garage Sale!  Every June, we turn the upper parking lot at the MetraPark into a HUGE, GIGANTIC, ENORMOUS garage sale!
Have a garage sale with us or come out & shop hundreds of garage sales all in one place! June 24, 2017, 7:00 a.m. to 3:00 p.m. at MetraPark in the Upper Lot!
SHOPPING!  Billings Biggest Garage Sale is a one day event that brings together literally thousands of shoppers to hundreds of garage sale booths all at one location.
SHOPPING!  Here's how it works & why we get a ton of shoppers to your garage sale:
We advertise Billings Biggest garage Sale like CRAZY!  Everyone knows about it!
Residents of Billinsg & surrounding areas drive to MetraPark.
Park the car & shop deals all day long in one place!
Save money, save time & get to see more garage sales than you ever would by driving all over town!
If you love garage selling - Billings Biggest Garage sale will be amazing for you!
SELLING!  Billings Biggest Garage Sale is the greatest kick-off to the garage sale season, giving you a chance to gather all the stuff that’s cluttering up your homes and businesses and put it out for sale.
Search your homes, attic to basement, cupboard to closet, and storeroom to garage.
Bring it all out and make some money selling it!
Billings Biggest Garage Sale is a great shopping opportunity to find that rare treasure you can’t live without!  Remember, one man’s trash is another man’s treasure.
And your trash can bring you lots of green at Billings Biggest Garage Sale!
Billings Biggest Garage Sale will be June 24, 2017 at the MetraPark in the upper parking lot.
A limited number of booths are available on a first-come, first-served basis for two types of seller booths: Residential Booths and Commercial Booths.  Instead of having your own garage sale on your own, isolated street – you can join hundreds of other garage sales in one big, festival event. Billings Biggest Garage Sale is advertised on 4 radio stations!

FAQs
What are my transport/parking options getting to the event?
The back half of the UpperParking Lot will be used for the event, Billings Bioggest Garage Sale.  There will be parking in the front half of the lot.  There is additional parking all around the MetraPark parking lots.
If your garage sale booth requires a trailer or a vehicle as part of your set up, you must set up Friday and your vehicle must fit in your garage sale booth area.  It cannot overextend into the \"neighbors\" space.
Vendor set up is Friday noon-7p.  There will be security all night.  Your stuff will be safe.
What if the weather is bad?
Billings in June can be tricky.  This is a rain or shine event.  We are having Billings Biggest Garage Sale on 6/24/17  7a-3p no matter the weather!  Set up is on Friday 6/23/17 noon-7p.  Bring tarps & tie downs to protect your stuff if the weather report looks iffy.
We have had a lot of luck with weather the last couple of years - o fingers crossed that it will be a sunscreen day & not an umbrella day!

What can/can't I bring to the event?
Anything you want to sell!  You should also bring: sunscreen, water to drink, and lunch or snacks for yourself! This event is so busy - you will probably not have time to stand in the food lines, come prepared to sell!

Where can I contact the organizer with any questions?
Email:  adella.sutton@townsquaremedia.com - or - call Christina at the office at 406-248-7827.
Please note that on Friday for set up - we are on site.  Your best bet is to come up to the event site & ask us questions when you get there.",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768090/https-_2F_2Fcdn.evbuc.com_2Fimages_2F18595685_2F135349775391_2F1_2Foriginal_zsvazw.jpg',
  start_date_time: "24 Jun 2017, 7:00 AM PST",
  end_date_time: "24 Jun 2017, 3:00 PM PST"
})
Event.create({title: "An Awesome Garage Sale...\"We're back!\"",
  description: "WE'RE BACK!
This time the theme is tools!
LOTS OF GARAGE TOOLS - ACCESSORIES - TRADE ITEMS...
Once again I'm helping my dad (an ex-trade teacher in press tool making, fitting and turning 'engineering' and general Mr Fix It) to sell anything and everything from his collection that he no longer requires, or things he is culling or simply replacing at home in his personal workshop.
Sure there will be the usual garage sale items that makes a Second Hand Saturday fun for all community shoppers; clothes, books, home decorative items etc....But I just wanted to reinforce that there is a TOOLS ,TOOLS, TOOLS focus this time round.
The roller door will go up at 8am on the dot! Then the fun begins...",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768138/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25667845_2F181223926239_2F1_2Foriginal_xoudkn.jpg',
  start_date_time: "26 Nov 2016, 8:00 AM PST",
  end_date_time: "26 Nov 2016, 3:00 PM PST"
})
Event.create({title: "Fundraiser for American Heritage Girls Troop 1378",
  description: "BBQ PLATES AND GARAGE SALE FUNDRAISER FOR AMERICAN HERITAGE GIRLS TROOP 1378
GET EXCITED! This is going to be a packed weekend (11/11/16-11/12/16) with lots of opportunities to support our local American Heritage Girls Troop #1378 so they can better serve others! You can help by ordering BBQ plates for yourself and/or your business on Veteran's Day, or simply buying a Friday night preview ticket to the Saturday garage sale.
For $10, you'll get a BBQ plate with: a chopped brisket plate with bun, cole slaw, and beans. You can drive through the parking lot between the hours of 10:30 and 1pm to pick your order up, or...IF YOU ORDER 10 OR MORE PLATES, WE'LL DELIVER.
For $10, you can purchase our 1st Dibs Picking Tickets for early shopping at the Preview Night for Friday night before our garage sale on Saturday.
GARAGE SALE IS OPEN TO THE PUBLIC ON FRIDAY 6-8PM (WITH PREVIEW TICKET) AND SATURDAY FROM 8AM-12PM ON 11/12/16. ",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768301/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25295398_2F151623211589_2F1_2Foriginal_kanv0u.jpg',
  start_date_time: "11 Nov 2016, 10:00 AM PST",
  end_date_time: "12 Nov 2016, 12:00 PM PST"
})
Event.create({title: "Hazel Park Raceway Flea Market .com * June 10, 11, 2017 * 10-5",
  description: "Hazel Park Raceway Flea Market & Garage Sale

Park & Sell at Hazel Park Raceway, set up 10 am

Clean your: Attic, Basement, Garage,  Pack your car,  Park & Sell at Hazel Park Raceway Flea Market
2 parking spaces, 10 x 20 each, $25 cash only event day, with id
6 parking spaces, 10 x 20 each, $50 cash only event day, with id
www.HazelParkRacewayFleaMarket.com

Safe, Family Fun, Police on site
Private Property:
No guns, knives, weapons, fireworks, flammables, pets allowed.

==============================================================================
Elliott Amusements Carnival
Friday-Sunday, June 9-11, 2017   10-5
 ",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768436/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25785358_2F193928113371_2F1_2Foriginal_kqwyay.jpg',
  start_date_time: "10 Jun 2017, 10:00 AM PST",
  end_date_time: "11 Jun 2017, 5:00 PM PST"
})
Event.create({title: "Dine & Donate Event for Rebuilding Together Metro Chicago",
  description: "Persona Pizzeria proudly supports Rebuilding Together Metro Chicago!
Dine at Persona Wood Fired Pizzeria on November 30 and RTMC will receive a donation of 20% of the sales!
Discounted parking provided at 181 W. Washington St. garage (just $9 for up to four hours…ask cashier for discount coupon)
Delivery orders ($50 minimum) placed on this date through personapizzeria.com or by calling 312-255-7575 and using code “RTMC” count toward Dine & Donate proceeds
Gift cards (available in $5 increments) purchased on this date with code “RTMC” also count toward Dine and Donate proceeds
 Bring a copy of THIS FLYER (printed or on your mobile device) with you to the event!
 ",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768591/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25194428_2F150385385035_2F1_2Foriginal_ebdoyh.jpg',
  start_date_time: "30 Nov 2016, 11:00 AM PST",
  end_date_time: "30 Nov 2016, 8:00 PM PST"
})
Event.create({title: "The After \"I Do\" Sale",
  description: "THE AFTER \"I DO\" SALE
A solution for the DIY bride-to-be and the overstocked newlywed. Parkway Place is excited to announce our second annual \"After 'I Do' Sale\" a wedding garage sale from one bride to another.
\"EARLY BRIDE\" SHOPPING | $15.00
For $15.00 get in the doors 30 minutes early and be the first to see what our 2017 Sellers have to offer! Limited number of tickets available, so register today to secure your spot! Includes one free drink per ticket for your choice of Mimosa, Bloody Mary, Soft Drink, Water, or Coffee. One ticket per person entering the sale required.

*NEW* VENDOR SNAPSHOTS
See what the local Wedding Professionals have to offer and take time to view one of our Vendor Snapshots! These themed displays give you a glimpse into what working with a local wedding professional can do to help make your big day complete! In addition, they can give you ideas on to how to use your new purchases! Our fun and interactive snapshots will include live models, cake samples, reception displays, and much more!
 ",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768779/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25346291_2F192062613647_2F1_2Foriginal_lp7ct1.jpg',
  start_date_time: "21 Jan 2017, 10:00 AM PST",
  end_date_time: "21 Jan 2017, 1:00 PM PST"
})
Event.create({title: "Holiday Tea at the Avery House on Sat, Dec 10 @ 10am",
  description: "Join us for a relaxing, heartwarming tea with friends and family. Holiday teas will be held inside the Avery House on December 8, 9, and 10 at 10:00 am.
Each tea is limited to 20 guests, and the cost per person is $25. Guests will enjoy a traditional menu consisting of scones with traditional Devonshire cream and lemon curd, tea sandwiches, and a dessert, along with plenty of warming, seasonally flavored teas.
All ticket sales are final, and tickets are non-refundable. Proceeds from these events go toward the nonprofit Poudre Landmarks Foundation's mission to preserve, restore, protect, and interpret the architectural and cultural heritage of the Fort Collins area.
FAQs
Where are the teas to be held?
The teas will be held in the parlors of the Avery House, 328 W. Mountain Ave., Fort Collins, CO 80521.
What are my parking options at the event?
Mon-Fri 8am-5pm parking in downtown Fort Collins, including around the Avery House, is limited to two hours. You will most likely be at the tea for longer than two hours; therefore, if you are attending the Thursday or Friday tea, you may wish to park in one of the City of Fort Collins' two downtown parking garages, which cost $1/hour, with the first hour free. The two garages are: the Civic Center Parking Structure at Mason/Laporte and the Old Town Parking Structure at Remington/Mountain. Both are just a few blocks from the Avery House, with the Mason/Laporte garage being the closest. Parking information for these structures is available on the City of Fort Collins website at http://www.fcgov.com/parking/structures.php
What is the event ticket refund policy?
All ticket sales are final, and tickets are non-refundable. Proceeds from these events go toward the nonprofit Poudre Landmarks Foundation's mission to preserve, restore, protect, and interpret the architectural and cultural heritage of the Fort Collins area.
 ",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478768961/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25234221_2F43286634138_2F1_2Foriginal_nq00on.jpg',
  start_date_time: "10 Dec 2016, 10:00 AM PST",
  end_date_time: "10 Dec 2016, 12:30 PM PST"
})
Event.create({title: "Indoor Yard Sale",
  description: "Indoor Yardsale with over 20 Vendors. Open to the public. Variety of items for all ages
 ",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478769396/krylon_pinterest_2_rbwgqa.jpg',
  start_date_time: "2 Dec 2016, 8:00 AM PST",
  end_date_time: "2 Dec 2016, 2:30 PM PST"
})
Event.create({title: "Harwich Holiday Yard Sale",
  description: "Register to sell your unique treasures, yard sale items and crafts at the...
Kiwanis of Lower Cape Cod
Harwich Holiday Yard Sale
Saturday, November 26, 2016 from 10 am to 2 pm
Harwich Community Center
100 Oak Street
Harwich, MA 02645
You have two options
$25 -  We provide one 6’x3’ table and one chair for $25
$20 -  You can bring your own single table (up to 8 feet long) and chair (both must have rubber feet)
Set-up is 8 am to 9:45 am on Saturday, November 26, 2016. Spaces are approx. 8 x 8'.
The Kiwanis Club of Lower Cape Cod is a service club that raises money to help local children through college scholarships and donations to local children’s charities. The Holiday Community Yard Sale is a fund raiser for these activities.

 ",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478769494/garage-sale-4.1_k7ryjv.jpg',
  start_date_time: "26 Dec 2016, 10:00 AM PST",
  end_date_time: "26 Dec 2016, 2:30 PM PST"
})
Event.create({title: "\"Be the Change\" - Fundraiser",
  description: "A great afternoon of Entertainment with Tessa Marie, Delicious Food & Stunning Views.
This event is to raise funds for the sponsorship and basic needs of children from Nairobi Childrens Home in Kenya.


The only chance that these beautiful children have at getting an education and a brighter future is through the kindness and generosity of everyday people like you & I.
We all know there are children on the other side of the world that have next to nothing. Sometimes we just can feel overwhelmed like \"How can I possibly make a difference?\".
The truth is you really can \"BE THE CHANGE\".
The Ripple effect that comes from just ONE childs education is AMAZING.  ",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478769256/0_tpndwa.png',
  start_date_time: "19 Nov 2016, 12:00 PM PST",
  end_date_time: "19 Dec 2016, 3:00 PM PST"
})
Event.create({title: "Fundraising with a Cause",
  description: "SMJ Magazine in association with Seventh House Publishing Arts is presenting its first Fundraising event for the production of an education & awareness documentary about the life of Bridget Perrier. Come out and enjoy the sweet JAZZ/R& B music of the Juno award winner Carlos Morgan.  A fashion show, opportunity to Network with business owners.
Music, entertainment, fashion show, silent auction, door prizes, vendor showcase and complementry refresements, cash bar.
SMJMagazine's current issue will be on site featuring African Fashion Week Toronto story for 2016.
Opportunity to donate cash, children's toys and christmas gift cards for families in exchange for SMJ Magazine printed issues.
Sponsorship spots available.
.
Tickets available for $35 in advance. $45 at the door.
Apply early ",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478769902/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25421239_2F3064849815_2F1_2Foriginal_jkhn9r.jpg',
  start_date_time: "11 Dec 2016, 6:00 PM PST",
  end_date_time: "11 Dec 2016, 11:00 PM PST"
})
Event.create({title: "Wreath Fundraiser",
  description: "Decorate your home or office with a colorful Young Life holiday wreath or purchase a wreath as a gift for a friend, relative, colleague or client.

These beautiful 24-inch wreaths are made of lush greens, mostly Noble Fir, and will stay fresh throughout the season.  They are adorned with ornaments and a decorative bow.

Getting your Young Life holiday wreaths is as easy as 1, 2, 3!
 Follow these steps:
Decide how many wreaths you want to purchase.
Select self-pickup (available at 2490 Pioneer Pike starting Nov. 21) or delivery(shipping orders must be placed online or mailed to the Eugene Young Life office by Dec. 10).
Submit payment (payment may be dropped off at self-pickup location at the time of pickup, or mailed, with order form, to Eugene Young Life).",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478770066/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25327521_2F80789415747_2F1_2Foriginal_d4hx9f.jpg',
  start_date_time: "26 Oct 2016, 8:00 AM PST",
  end_date_time: "18 Dec 2016, 8:00 PM PST"
})
Event.create({title: "Fundraiser for Alpha",
  description: "\“Attention OSU Fan\”
Fundraiser for Alpha!
Come out and join us for a relaxing evening painting your very own Snow –H-I-O canvas. What home in central Ohio is without some OSU memorabilia or wrap your special hand painted gift for someone special this holiday season.
Plan to grab a few of your closest friends for a night out to support a worthwhile cause. Hors d’oeuvres and drinks will be provided.
",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478770198/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25256242_2F100512159255_2F1_2Foriginal_iuovyu.jpg',
  start_date_time: "8 Dec 2016, 5:30 AM PST",
  end_date_time: "8 Dec 2016, 8:30 PM PST"
})
Event.create({title: "Curry FUNdraiser",
  description: "Come join us for our annual curry extravaganza! Enjoy a two-course, sit-down meal in the opulent surroundings of The Jewel in the Crown. Once again, Mr Ali will be playing 'mein host'.

It will be the usual Harbour merriment: good food, even better company (!) and loads of really brilliant raffle prizes... who needs Christmas shopping? We look forward to letting our hair down and celebrating the end of another year of hard, but rewarding, work with you.
",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478769256/0_tpndwa.png',
  start_date_time: "5 Dec 2016, 7:30 AM PST",
  end_date_time: "5 Dec 2016, 9:30 PM PST"
})
Event.create({title: "IRIS FUNdraiser",
  description: "Let's put the fun back in fundraising! Who feels like celebrating an awesome organization and donating a little time and money to help them continue to flourish in our community?
IRIS is a nonprofit organization in New Haven that has been helping refugees and immigrants get situated in CT for almost 30 years. Their many services include assistance with housing, family care, medical care, education, jobs, job training, and legal assistance.
Since meeting the good folks who work there, I've wanted to help raise them some much needed and well deserved money and awareness. Please join me for a night of food, drinks, raffle prizes, silent auctions, and dancing as we put our best New Haven feet forward and give back to this vital and necessary organization.
Tickets will include all of the Black Hog beer, Miya's Sushi, Scratch Baking goodies, Bar pizza, Rainbow Gardens, wine, cocktails, and falafel you can eat and drink. All proceeds will go directly to IRIS.
Please bring your appetites, your excitement, your dancing shoes, and your wallets (for raffle tickets)!
",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478770391/https-_2F_2Fcdn.evbuc.com_2Fimages_2F24792474_2F76044210207_2F1_2Foriginal_eyf4qf.jpg',
  start_date_time: "19 Dec 2016, 6:30 AM PST",
  end_date_time: "19 Dec 2016, 9:30 PM PST"
})
Event.create({title: "Christmas Fundraiser",
  description: "You're invited!!

To what you ask? Well, Alderidge Construction has taken a step forward and decided to partner with Food for the Hungry Canada. We have pledged to raise $30,000 every year for the next 10 years for the village of Acul, Guatemala. Eventually, after 10 years of learning and growing, this same village will teach and walk alongside another village to end the cycle of poverty.
This is a big commitment, and we would love to have our family, friends and community encourage and come along with us in this journey!

So what's the invite for? We're having a fundraiser and we've invited you! There will be a silent auction, games, craft beer, finger food and we even have live music and comedian, Cliff Prang joining us! We will also have a brief presentation from Bernie Willock, the CEO of Food for the Hungry.
Who will be attending: The Community
What: Wine & Cheese Fundraiser (ticket includes 1 glass of wine)
Where: Krause Berry Farms
When: November 26, 2016
Why: Alderidge Construction has pledged to raise $30,000 every year for the next 10 years for the town of Acul, Guatemala with Food for the Hungry. At the end of 10 years the community will be sustainable and will be able to help other communities out of poverty
Dress Code: Semi-formal
What to bring: There will be a silent auction, games and drinks to purchase. Bring cash accordingly!
Are children welcome: This will be a child-free event
",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478770537/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25352074_2F188343250084_2F1_2Foriginal_qypd3m.jpg',
  start_date_time: "26 Nov 2016, 6:30 AM PST",
  end_date_time: "26 Nov 2016, 10:30 PM PST"
})
Event.create({title: "Yoga Fundraiser",
  description: "Please join the Northwest Ohio Rescue and Restore Coalition for a flameless candlelit yoga session for students of all experience levels that will benefit survivors of human trafficking and sexual violence.
$10.00 participation fee at the door. Additional donations welcome!
Limited yoga mats will be available for use so please bring your mat with you!
Parking willl be available onsite at the Bradfield Community Center. Overflow parking is also available across the street at the United Way.
",
  host_id: 2,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478770687/https-_2F_2Fcdn.evbuc.com_2Fimages_2F25108674_2F162749709667_2F1_2Foriginal_falmzv.jpg',
  start_date_time: "12 Dec 2016, 6:00 AM PST",
  end_date_time: "12 Dec 2016, 8:00 PM PST"
})
Event.create({title: "Craft Fair / Community Yard Sale",
  description: "East Allen EMS is hosting our annual Craft Fair & Community Yard Sale. We are looking for vendors, crafter's, direct sales, and yard saler's. This is an outdoors event. Below are few key points of information.
Vendors must supply all their own tables, chairs, tents and display items.
Arrive at 7:00 am. Report to the check-in table to receive your booth assignment.
Food will be available for purchase.
Rental fee gives you a 12x12 space and a spot to park your car next to your space.
Rain Date will be on Sunday May 14th 2017
$15 for one space, $25 for two, $35 for three
Register at https://eatvac.eventbrite.com
Spots will not be held. First come first serve to whomever pays first.

Those choosing to mail in cash or check as payment. Checks are payable to EATVAC. Mail your payment to 4945 Nor-Bath Blvd Northampton PA 18067. Payment is due on May 12th 2017.

Sponsorship Opertunities
Want to be a sponsor at our event? EATVAC is looking for local business's/companies to sponsor our event. Your generous sponsorship will get your logo on our Facebook page, website as well as on a yard sign at our event. Please contact Joe Light if interested and for more details. Email Joe at jlight@eatvac.org
Tricky Tray Information (Click the Link FMI)
We are asking every vendor to donate an item to our tricky tray. Drawing is at 2PM. You do not need to be present to win.
Pricing:
Tickets are $1 each, 10 for $5, or 20 for $10
We will also be selling station t-shirts and bumper stickers as a fundraiser for the ambulance corps. Shirts are $20 each and sizes range from small to 5X. Bumper Stickers are $1

FAQs
 Where can I contact the organizer with any questions?
You can contact Joe Light at jlight@eatvac.org
 Do I have to bring my printed ticket to the event?
Yes or having it on your smartphone works too. We need the QR Code to check you in when you arrive.
 What is the refund policy?
No shows = No Refund
Also last day to cancel to get your money back is May 9th.
",
  host_id: 3,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478771744/https-_2F_2Fcdn.evbuc.com_2Fimages_2F24505326_2F136740680043_2F1_2Foriginal_zxilql.jpg',
  start_date_time: "13 May 2017, 8:00 AM PST",
  end_date_time: "13 May 2017, 3:00 PM PST"
})
Event.create({title: "Toy Train, Collectible and Hobby Show/Sale",
  description: "Vendors will be on hand selling various model trains, hobbies collectibles, and diecast cars, and much more. There will be a running train layout. Thomas the Tank Engine video will be playing for kids to enjoy.  So come and bring your children to the show. Have a chance to enter a drawing to win a gift certificate to an upcoming show of ours.


Show is open   9am – 2pm
Admission is  $5.00 adults,   kids12 & under are free
Early Bird is by reservation  ONLY  8 – 9am   for $7.00.
.
We are looking to expand into other hobbies as well.  If you have any hobbies and/or collectibles you would like to be a vendor, sell for extra money.  Please contact Joe at the number listed below, or visit us online.
New vendors are always welcome.
  For more information contact Joe @ 727-244-1341.  Or go to: www.regalrailways.com
",
  host_id: 1,
  image_url: 'http://res.cloudinary.com/psia12345/image/upload/v1478771892/https-_2F_2Fcdn.evbuc.com_2Fimages_2F24047156_2F81722665081_2F1_2Foriginal_l8rz3a.jpg',
  start_date_time: "19 Nov 2016, 9:00 AM PST",
  end_date_time: "19 Nov 2016, 2:00 PM PST"
})

#Category
Category.create({
  name: 'Books'
})
Category.create({
  name: 'Electronic'
})
Category.create({
  name: 'Furniture'
})
Category.create({
  name: 'Clothing'
})
Category.create({
  name: 'Food'
})

#CategoryEventJoinTable
# CategoryEventJoinTable.create({
#   event_id: 1,
#   category_id: 1
# })
# CategoryEventJoinTable.create({
#   event_id: 1,
#   category_id: 2
# })
# CategoryEventJoinTable.create({
#   event_id: 2,
#   category_id: 2
# })
# CategoryEventJoinTable.create({
#   event_id: 2,
#   category_id: 1
# })
# CategoryEventJoinTable.create({
#   event_id: 2,
#   category_id: 3
# })
#
# CategoryEventJoinTable.create({
#   event_id: 1,
#   category_id: 1
# })
# CategoryEventJoinTable.create({
#   event_id: 1,
#   category_id: 2
# })
# CategoryEventJoinTable.create({
#   event_id: 2,
#   category_id: 2
# })
# CategoryEventJoinTable.create({
#   event_id: 2,
#   category_id: 1
# })
#
# #event_attendee_join_tables
# EventAttendeeJoinTable.create({
#   event_id: 1,
#   attendee_id: 2
# })
# EventAttendeeJoinTable.create({
#   event_id: 1,
#   attendee_id: 3
# })
# EventAttendeeJoinTable.create({
#   event_id: 2,
#   attendee_id: 1
# })
#
#
# #EventInterestedJoinTable
# EventInterestedJoinTable.create({
#   event_id: 3,
#   user_id: 2
# })
# EventInterestedJoinTable.create({
#   event_id: 3,
#   user_id: 1
# })
# EventInterestedJoinTable.create({
#   event_id: 4,
#   user_id: 2
# })
# EventInterestedJoinTable.create({
#   event_id: 4,
#   user_id: 3
# })
