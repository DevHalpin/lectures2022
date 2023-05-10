# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Beginning seeding process"

puts "Creating Characters...."

10.times do
  Character.create(
    name: Faker::TvShows::TheITCrowd.character,
    actor: Faker::TvShows::TheITCrowd.actor,
    email: Faker::TvShows::TheITCrowd.email
  )
end

characters = Character.all # Lists all characters that were created

puts "Creating Quotes..."

20.times do
  Quote.create(
    quote: Faker::TvShows::TheITCrowd.quote,
    character: characters.sample
  )
end

puts "Seeding Complete!"
