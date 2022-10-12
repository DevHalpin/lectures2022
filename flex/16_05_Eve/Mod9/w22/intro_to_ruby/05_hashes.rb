# hashes
# associative arrays ... a way of storing key/value pairs
user = {
    "username" => "John"
}
puts user
# access properties with square brackets
puts user["username"]
# puts user.username throws an error

# symbols
# "a string that you can't change"
# perfect as keys for hashes
user = {
    :username => "John"
}
puts user[:username]

# and even better short-hand
user = {
    username: "john"
}
puts user[:username]

# what about dynamic keys?
my_key = "username"
# my_key = :username
puts user[my_key.to_sym]
# puts user[my_key]