# Blocks are chunks of code that can be executed
dogs = ["Odie", "Lassie", "Dioji"]

people = ["Bob", "Joe", "Sue", "George"]

# dogs.each do |dog|
#   puts dog
# end

# dogs.each { |dog| puts dog }

# lambdas "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "Hello"} # lambda literal

# use & to convert a lambda to a block
dogs.each &do_thing
people.each &do_thing

def my_method(&block)
  block.call # .call to invoke the block
end

my_method(&say_something)
