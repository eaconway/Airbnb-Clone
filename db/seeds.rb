# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'destroying all users'
User.destroy_all

puts 'destroying all homes'
Home.destroy_all

puts 'destroying all hostings'
Hosting.destroy_all

puts 'destroying all bookings'
Booking.destroy_all

puts 'destroying all reviews'
Review.destroy_all



puts 'creating users'
user1 = User.create!(
  email: 'demo@demo.com',
  fname: 'Demo',
  lname: 'User',
  password: 'password',
  birthday: '1993-07-26'
)

user1.profile_pic.attach(io: File.open('app/assets/images/aokiji.jpeg'),
 filename: 'aokiji.jpeg')
user1.save!

user2 = User.create!(
  email: 'naruto@demo.com',
  fname: 'Naruto',
  lname: 'Uzumaki',
  password: 'password',
  birthday: '1993-07-26'
)
user2.profile_pic.attach(io: File.open('app/assets/images/naruto.png'),
 filename: 'naruto.png')
user2.save!

user3 = User.create!(
  email: 'sasuke@demo.com',
  fname: 'Sasuke',
  lname: 'Uchiha',
  password: 'password',
  birthday: '1993-02-05'
)
user3.profile_pic.attach(io: File.open('app/assets/images/sasuke.jpg'),
 filename: 'sasuke.jpg')
user3.save!

user4 = User.create!(
  email: 'midoriya@demo.com',
  fname: 'Midoriya',
  lname: 'Deku',
  password: 'password',
  birthday: '1993-02-28'
)
user4.profile_pic.attach(io: File.open('app/assets/images/midoriya.png'),
 filename: 'midoriya.png')
user4.save!

user5 = User.create!(
  email: 'luffy@demo.com',
  fname: 'Luffy',
  lname: 'Monkey D.',
  password: 'password',
  birthday: '1992-10-09'
)
user5.profile_pic.attach(io: File.open('app/assets/images/luffy.png'),
 filename: 'luffy.png')
user5.save!

user6 = User.create!(
  email: 'ichigo@demo.com',
  fname: 'Ichigo',
  lname: 'Kurosaki',
  password: 'password',
  birthday: '1994-07-01'
)
user6.profile_pic.attach(io: File.open('app/assets/images/ichigo.jpg'),
 filename: 'ichigo.jpg')
user6.save!



puts 'creating homes'
home1 = Home.new(
  title: "Sasuke's House",
  status: 'active',
  lat: 35.773937,
  lng: 139.594061,
  guests: 4,
  home_type: 'Entire Place',
  price: 250,
  description: "Filled with saddness and despair, haunted by the memories of my family's murder by my own brother. Stay here if you wish, but DON'T touch ANYTHING!",
  extra_info: "By the way, Naruto stops by from time to time... so watch out for that",
  beds: 4,
  baths: 5,
  bedrooms: 4,
  internet: false,
  washer: true,
  dryer: false,
  city: 'Konoha',
  country: 'Japan'
)
home1.image.attach(io: File.open('app/assets/images/sasukes_house.jpg'),
 filename: 'sasukes_house.jpg')
home1.save!
hosting1 = Hosting.create!(
  host_id: 3,
  home_id: 1
)

home2 = Home.new(
  title: "Naruto's House",
  status: 'active',
  lat: 35.812036,
  lng: 139.865119,
  guests: 2,
  home_type: 'Entire Place',
  price: 75,
  description: "Hi! Thanks for the interest in my apartment. There's not much around, but it's awesome and centrally located!",
  extra_info: "Watch out for the bugs tho :)",
  beds: 1,
  baths: 1,
  bedrooms: 1,
  internet: false,
  washer: true,
  dryer: true,
  city: 'Konoha',
  country: 'Japan'
)
home2.image.attach(io: File.open('app/assets/images/naruto_apt.jpg'),
 filename: 'naruto_apt.jpg')
home2.save!
hosting2 = Hosting.create!(
  host_id: 2,
  home_id: 2
)

home3 = Home.new(
  title: "UA High School",
  status: 'active',
  lat: 35.170616,
  lng: 136.900472,
  guests: 1,
  home_type: 'Shared Room',
  price: 75,
  description: "Where heroes are born. Come study under All-Might and Eraser-Head's tutelage. Develop your skills so that you can graduate as society's top defense against evil!",
  extra_info: "",
  beds: 1,
  baths: 1,
  bedrooms: 1,
  internet: true,
  washer: true,
  dryer: false,
  city: 'City A',
  country: 'Japan'
)
home3.image.attach(io: File.open('app/assets/images/UA_high.png'),
 filename: 'UA_high.png')
home3.save!
hosting3 = Hosting.create!(
  host_id: 4,
  home_id: 3
)

home4 = Home.new(
  title: "Spirited Away Bath House (18+)",
  status: 'active',
  lat: 35.394438,
  lng: 137.656771,
  guests: 1,
  home_type: 'Private Room',
  price: 125,
  description: "Come on in! I'm sure you'll learn alot about yourself during your stay. You'll die to stay here again...!",
  extra_info: "",
  beds: 1,
  baths: 1,
  bedrooms: 1,
  internet: true,
  washer: true,
  dryer: true,
  city: 'Miyazaki City',
  country: 'Japan'
)
home4.image.attach(io: File.open('app/assets/images/spirited_away.jpg'),
 filename: 'spirited_away.jpg')
home4.save!
hosting4 = Hosting.create!(
  host_id: 1,
  home_id: 4
)

home5 = Home.new(
  title: "Killua's House",
  status: 'active',
  lat: 35.810627,
  lng: 136.498899,
  guests: 16,
  home_type: 'Entire Place',
  price: 1500,
  description: "Family of Assassins... nuff said. You can only get in if
   you can get past the testing gate. And NO, you won't get your money back!",
  extra_info: "",
  beds: 10,
  baths: 12,
  bedrooms: 9,
  internet: true,
  washer: true,
  dryer: true,
  city: 'Assassinville',
  country: 'Japan'
)
home5.image.attach(io: File.open('app/assets/images/killuas_house.png'),
 filename: 'killuas_house.png')
home5.save!
hosting5 = Hosting.create!(
  host_id: 1,
  home_id: 5
)

home6 = Home.new(
  title: "Kurosaki Clinic",
  status: 'active',
  lat: 33.331210,
  lng: 130.527772,
  guests: 2,
  home_type: 'Private Room',
  price: 150,
  description: "My dad might kick you in the face when you arrive, but that's alright. He's not that bad :)",
  extra_info: "",
  beds: 4,
  baths: 3,
  bedrooms: 4,
  internet: true,
  washer: true,
  dryer: true,
  city: 'Karakura Town',
  country: 'Japan'
)
home6.image.attach(io: File.open('app/assets/images/Kurosaki_Clinic.png'),
 filename: 'Kurosaki_Clinic.png')
home6.save!
hosting6 = Hosting.create!(
  host_id: 6,
  home_id: 6
)

home7 = Home.new(
  title: "Howl's Moving Castle",
  status: 'active',
  lat: 36.704176,
  lng: 136.895641,
  guests: 3,
  home_type: 'Private Room',
  price: 200,
  description: "Always on the move! THIS IS A ONE IN A LIFETIME EXPERIENCE! Jk,
    but sersiously, it'll be fun :)",
  extra_info: "",
  beds: 3,
  baths: 1,
  bedrooms: 1,
  internet: false,
  washer: true,
  dryer: true,
  city: 'Miyazaki City',
  country: 'Japan'
)
home7.image.attach(io: File.open('app/assets/images/howls.jpg'),
 filename: 'howls.jpg')
home7.save!
hosting7 = Hosting.create!(
  host_id: 1,
  home_id: 7
)

home8 = Home.new(
  title: "Mononoke Forest",
  status: 'active',
  lat: 35.969636,
  lng: 137.290976,
  guests: 10,
  home_type: 'Private Room',
  price: 10,
  description: "Learn to live off the land, with me (Mononoke) and the wolves. FYI - I'm having
    Aokiji list this for me, since I'm not a big 'computer' user', obviously.",
  extra_info: "",
  beds: 0,
  baths: 0,
  bedrooms: 0,
  internet: false,
  washer: true,
  dryer: false,
  city: 'Miyazaki City',
  country: 'Japan'
)
home8.image.attach(io: File.open('app/assets/images/princess_mononoke.jpg'),
 filename: 'princess_mononoke.jpg')
home8.save!
hosting8 = Hosting.create!(
  host_id: 1,
  home_id: 8
)

home9 = Home.new(
  title: "Mama's House",
  status: 'active',
  lat: 43.365375,
  lng: 142.739619,
  guests: 15,
  home_type: 'Entire Place',
  price: 1000,
  description: "Listen Mama LOVES her cake, trust me, I know first hand.
    And she's SUPER strong. Everyone I fight on this island make me eat something to win!",
  extra_info: "",
  beds: 0,
  baths: 0,
  bedrooms: 0,
  internet: true,
  washer: true,
  dryer: true,
  city: 'Whole Cake Island',
  country: 'Japan'
)
home9.image.attach(io: File.open('app/assets/images/mamas_cake.png'),
 filename: 'mamas_cake.png')
home9.save!
hosting9 = Hosting.create!(
  host_id: 5,
  home_id: 9
)


puts 'creating Bookings'
booking1 = Booking.create!(
  home_id: 3,
  guest_id: 1,
  start_date: '2018-11-09',
  end_date: '2018-11-11',
  guests: 1
)

booking2 = Booking.create!(
  home_id: 2,
  guest_id: 1,
  start_date: '2018-11-20',
  end_date: '2018-11-24',
  guests: 2
)

booking3 = Booking.create!(
  home_id: 1,
  guest_id: 1,
  start_date: '2018-11-30',
  end_date: '2018-12-02',
  guests: 4
)

booking4 = Booking.create!(
  home_id: 4,
  guest_id: 2,
  start_date: '2018-11-30',
  end_date: '2018-12-02',
  guests: 1
)

booking5 = Booking.create!(
  home_id: 5,
  guest_id: 3,
  start_date: '2018-09-30',
  end_date: '2018-10-02',
  guests: 7
)

booking6 = Booking.create!(
  home_id: 5,
  guest_id: 4,
  start_date: '2018-10-02',
  end_date: '2018-10-04',
  guests: 10
)

booking7 = Booking.create!(
  home_id: 1,
  guest_id: 2,
  start_date: '2018-09-15',
  end_date: '2018-09-20',
  guests: 1
)


puts 'creating Reviews'
review1 = Review.create!(
  home_id: 5,
  author_id: 4,
  body: "This place was....super scary. They're all assassins and even the
  butlers were super strong. They made me push open a huge gate just to
  get into the place! WTF?",
  rating: 3
)

review2 = Review.create!(
  home_id: 5,
  author_id: 3,
  body: "**panting** this place is SO strong! I love it. I'll be staying
   here again when I need to train next. ",
  rating: 4.5
)

review3 = Review.create!(
  home_id: 1,
  author_id: 2,
  body: "I love you Sasuke! Please let me stay here again!",
  rating: 5
)

review4 = Review.create!(
  home_id: 4,
  author_id: 2,
  body: "These people are weird. Especially that Midoriya kid. He kept muttering
   to him himself the entire time I was there. Who does that!?",
  rating: 3.5
)

review5 = Review.create!(
  home_id: 6,
  author_id: 5,
  body: "This place is AWESOME! Karin and Ichigo's dad sure know how to make
   some amazing meat! After I become Pirate King, I'm coming right back here!",
  rating: 5
)
