# break
i = 0
loop do
  
  i += 1
  # puts i
  #exit the loop
  break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 do # prints 1 through
  i += 1
  # puts i
end

until i > 4 do
  i += 1
  # puts i
end

# for..in 
numbers = [1,2,3,4,5]
for number in numbers do
  # puts "Number: #{number}!"
end

# each === forEach
numbers.each do |number|
  # puts "Number: #{number}"
end

# select === filter
list = [1,2,3,4,5]
filter = list.select do |num|
  num >= 3
end
# puts filter

# ranges
(5..10).each do |num|
  # puts num
end

# times
10.times { puts 'Hello World'}