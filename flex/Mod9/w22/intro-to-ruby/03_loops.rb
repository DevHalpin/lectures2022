# break
i = 0
loop do
    i += 1
    puts i

    #exit the loop
    break if i >= 10 # print 1 through 10
end

#while
i = 0
while i < 10 do # print 1 through 10
    i += 1
    puts i
end

#until
i = 0
until i >= 10 do # print 1 through 10
    i += 1
    puts i
end

#for..in equivalent to for...of in JS
names = ['David', 'Tony', 'Bryson', 'Bob']
for name in names do
    puts "Hello #{name}!"
end

# each is equivalent to forEach
names.each do |name|
    puts "Goodbye #{name}!"
end

#ranges
(5..15).each do |num|
    puts num #prints 5 to 15
end

# times
100.times do |num|
    puts num
end


