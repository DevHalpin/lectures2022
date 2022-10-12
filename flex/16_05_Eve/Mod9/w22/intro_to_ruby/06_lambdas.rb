# blocks define a chunk of code to be executed
# blocks are anything within do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
    #inside a block
    puts dog
end

dogs.each { |dog|
    #inside a block
    puts dog
}

#lambdas
# "named blocks"
do_thing = lambda { |dog| puts dog } # lambda keyword
say_something = -> { puts "Bark" }

# use lambda
dogs.each &do_thing

# define method that takes a lambda
def my_method(&block)
    block.call # invoke the block
end

dogs.each do |dog|  
    my_method(&say_something)
end