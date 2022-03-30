# this is a comment


=begin
multiline comment
line 2 etc
=end

#print something to console
print "something " #no new line process.write.out
puts "something" # new line console.log
p 7

# put a blank line
puts "I want a space"
puts
puts "Next line"

#variables don't need to be declared and we don't use semi colons
name = "David"
puts name

#Ruby is dynamically typed
name = 7
name = true

#nil is equivalent to JS null
# there is no undefined
name = nil

#Constants
NAME = "David"
#can be redefined but will give a warning as a constant should not be redefined
NAME = "Tony"

puts NAME

# No type coercion in Ruby unlike JS
puts 2 == '2' # false

#Casting values
num = "4"
p num.to_i
#
p num
other_num = 5
p other_num.to_s

#String Concatenation
first_name = "David"
last_name = "Halpin"

puts first_name + " " + last_name
#String interpolation
puts "#{first_name} #{last_name}"
#Interpolation only works with double quotes
puts '#{first_name} #{last_name}'