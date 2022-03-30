#methods have implicit return of last line of method
def say_hello name
    "Hello #{name}, nice to meet you"
end

puts say_hello "David"

# Ruby passes arguments by value
def change_it val
    val = 5
end
num = 10
puts num # 10
change_it num
puts num

#String methods
ruby_creator = "Yuki Matz"
puts ruby_creator.split(' ').class
puts ruby_creator.size
puts ruby_creator.include?("Yuki") #? means method returns a boolean value
puts ruby_creator.downcase! #! means method mutates object in place
puts ruby_creator
