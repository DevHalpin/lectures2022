
#if, else if (elsif) and else
num = 1
if num > 2
    puts "larger than two"
elsif num == 1
    puts "number is 1"
else
    puts "must be smaller"
end

#unless, inverted if
first_name = "David"
unless (first_name == "David")
    puts "Pick a better name"
else
    puts "Good choice"
end

#One liner in Ruby
num = 2
puts "The number is 2" if num == 2 
sunny = false
puts "wear rain jacket" unless sunny

# Case Statement, same as switch from JS
# last_name = "Kenobi"
# case last_name
#     when "Halpin"
#         puts "Hello"
#         exit
#     when "Kenobi"
#         puts "This is not the code you're looking for"
#         exit
#     else
#         puts "This is the default response"
# end

# Ternary 
number = 11
output = number < 10 ? "this is a single digit" : "this is a multiple digit"
puts output

