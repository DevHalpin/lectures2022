# blocks define a chunk of code to be executed
# can be do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each { |dog|
    puts dog
}

# lambdas
# "named blocks"

do_something = lambda { |dog| puts dog } #lambda keyword
say_something = -> { puts "This is crazy" } # lambda literal

# How to use in a loop
dogs.each &do_something

# How to define a method that takes a lambda
def my_method &block
    block.call #invokes the block
end

my_method &say_something
