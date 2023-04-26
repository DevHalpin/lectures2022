# Hashes
# Associative Array... a way of storing key/value pairs

user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}

puts user
puts user["logged_in"] # false

user = {
  :username => "adal",
  :password => "1234",
  :logged_in => true
}
puts user[:logged_in]

user = {
  username: "Bobh",
  password: "1234",
  logged_in: true
}
puts user[:logged_in]

my_key = 'username'

user[my_key.to_sym]