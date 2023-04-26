# special methods end in ? or !
# ? methods return a boolean value (like isActive in JS)
# ! methods perform some kind of mutation 

# writing methods
def say_hello name # starts with a definition
  puts "Hello #{name}, nice to meet you"
end

# say_hello "Bob"
# say_hello("Bob")

# say_hello "Bob"

# methods have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end

def isLarger?(first_number, second_number)
  first_number > second_number
end

# puts full_name("David", "Halpin")
# puts isLarger?(2, 1)

# arguments are passed by value 
def change_it (val)
  val = 5
  puts val
end
num = 10
puts num
change_it(num)
puts "Final number: #{num}"