
# to import code from another file
# load "05_hashes.rb"


# bundle init
# bundle add rainbow

# external packages are required; not loaded
require 'rainbow'

this = Rainbow('this').red
is = Rainbow('is').green
neat = Rainbow('neat').orange

# how to throw an error in ruby
# raise "We got an error"

puts "#{this} #{is} #{neat}"