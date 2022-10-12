# print something to the console
print "something" # no new line
puts "something else" # new line
p "also worked" # returns the value printed

# put a blank line in the console
puts "I need space"
puts
puts "This is more text"

=begin
multi-line
comment
=end

# variables don't need to be declared (no const or let)
# and they don't need semicolons
name = "Alice"

# Ruby is dynamicallly typed
name = 7
name = true

# nil is equivalent to JS null
# there is no undefined or null in Ruby
name = nil

# Constants in Ruby are capitalized
Name = 'Alice'
# Hungarian notation
NAME = 'Alice'

#we have == to just check value regardless of type
puts 2 == '2' # false

# === is just an alias for ==
puts 2 === '2' # false

# casting values
num = '4'
p num.to_i # 4
other_num = 5
p other_num.to_s # '5'

# string concatention
puts "first_name" + " " + "last_name"
# string interpolation
puts "#{"first_name"} #{"last_name"}"
# string interpolation only works with double quotes
puts '#{"first_name"} #{"last_name"}'
