i = 0
loop do
    i += 1
    # puts i

    # exit the loop
    break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 # prints 1 through 5
    i += 1
    # p i
end

# until
i = 0 
until i > 5 do # prints 1 through 6
    i += 1
    # p i
end

# for..in == for..of ¯\_(ツ)_/¯
names = ['Alice', 'Bob', 'Carol', 'David']
for name in names do
    # puts "Hello #{name}!"
end

# each == forEach
names.each do |name|
    # puts "Goodbye #{name}!"
end

# select == filter
list = [1,2,3,4,5]
bigNum = list.select do |num|
    num >= 3
end
puts bigNum

# range
(5..10).each { |num|
    puts num # print 5 through 10
}

#times
10.times { puts "hello world" }
