# 2 + 3 is equivalent to add(2,3) or add 2,3

#Special methods 
# ? methods returns a boolean (like isActive?)
# ! methods perform some kind of mutation (.slice vs .splice!)

# write our own methods
def say_hello name # starts with a definition
    puts "Hello #{name}, nice to meet you"
end

# invoke with or without parens
say_hello "Bob"
say_hello("Bob")

# calling a method with too many/too few arguments will result in an error
# say_hello("Bob", "Hoskins")

# methods in ruby have implicit return
def full_name first, last
    first + " " + last
end
puts full_name 'David', 'Halpin'

#arguments are passed by value
def change_it val
    val = 5
    puts val
end
num = 10
puts num # 10
change_it num
puts num # 10


