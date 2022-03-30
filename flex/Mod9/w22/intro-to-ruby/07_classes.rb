class Car
    #allows you to access variables outside of the class as default state for methods and variables within a class is private
    attr_accessor :year#allows both reading and writing of variable outside
    attr_reader :year #allows variable to be read outside (getter)
    attr_writer :year #allows variable to be changed outside (setter)
    #method used to create new instances of a class, required
    def initialize (color, year, model)
        @color = color
        @year = year
        @model = model
    end
end



#equivalent to
# class Car
#     def initialize (color, year, model)
#         @color = color
#         @year = year
#         @model = model
#     end
#     def year 
#         @year
#     end
#     def year=(value)
#         @year = value
#     end
# end


my_car = Car.new("silver", 2013, "Rogue")

puts my_car.year

my_car.year = 2020

puts my_car.year
