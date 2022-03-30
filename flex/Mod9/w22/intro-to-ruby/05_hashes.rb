#associate array ... a way to store key/value pairs
user = {
    "username" => "dhalpin",
    "password" => "1234",
    "logged_in" => false

}
puts user
# # access properties with square brackets
puts user["username"]

#symbols
#"a string that you can't change"
#perfect as keys for hashes
user = {
    :username => "dhalpin",
    :password => "1234",
    :logged_in => false
}
p user[:username]

# short-hand
user = {
    username: "dhalpin",
    password: "1234",
    logged_in: false
}
p user[:username]
p user

#dynamic key
my_key = 'username'
p user['username'.to_sym]