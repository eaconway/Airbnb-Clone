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

# puts 'destroying all bookings'
# Booking.destroy_all



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
  dryer: false
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
  guests: 1,
  home_type: 'Entire Place',
  price: 75,
  description: "Hi! Thanks for the interest in my apartment. There's not much around, but it's awesome and centrally located!",
  extra_info: "Watch out for the bugs tho :)",
  beds: 1,
  baths: 1,
  bedrooms: 1,
  internet: false,
  washer: true,
  dryer: true
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
  description: "Where hero's are born. Come study under All-Might and Eraser head's tutelage. Develop your skills so that you can graduate as society's top defense against evil!",
  extra_info: "",
  beds: 1,
  baths: 1,
  bedrooms: 1,
  internet: true,
  washer: true,
  dryer: false
)
home3.image.attach(io: File.open('app/assets/images/UA_high.png'),
 filename: 'UA_high.png')
home3.save!
hosting3 = Hosting.create!(
  host_id: 4,
  home_id: 3
)

home4 = Home.new(
  title: "Spirited Away House",
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
  dryer: true
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
  description: "Family of Assassings... nuff said",
  extra_info: "",
  beds: 10,
  baths: 12,
  bedrooms: 9,
  internet: true,
  washer: true,
  dryer: true
)
home5.image.attach(io: File.open('app/assets/images/killuas_house.png'),
 filename: 'killuas_house.png')
home5.save!
hosting5 = Hosting.create!(
  host_id: 1,
  home_id: 5
)
