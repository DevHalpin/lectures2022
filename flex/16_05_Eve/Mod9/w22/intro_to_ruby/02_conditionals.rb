# if..else and comparison
# > < >= <= == !=
num = 0
if (num > 2)
    puts "larger than two"
else
    puts "must be smaller"
end

# we also have an else if, not spelt right
if (num > 2)
    puts "number is big"
elsif (num < 1)
    puts "number is smol"
else
    puts "is number"
end

# unless inverts the condition
unless (num <= 2)
    puts "number is big"
else
    puts "is small number"
end

# reverse if
hour = 7
puts "good evening" if hour > 5 
sunny = false
puts "wear rain jacket" unless sunny

# our switch statement is now called case
last_name = "Han"
case last_name
    when "Chewie"
        puts "Hello"
        exit # == break
    when "Dog"
        puts "This is dog"
        exit
    else
        puts "You are seeing the default message"
end

#ternary
num = 7
puts (num < 10) ? "single digits" : "multiple digits"