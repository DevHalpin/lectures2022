#declare class
# class Car
#     def initialize (color, year, model)
#         @color = color
#         @year = year
#         @model = model
#     end
# end

# my_car = Car.new("red", 2008, "Civic")

# puts my_car.inspect

class Car
    attr_accessor :color, :year
    attr_writer :model
    def initialize (color, year, model)
        @color = color
        @year = year
        @model = model
    end
end

# equivalent to
# class Car
#     def initialize (color, year, model)
#         @color = color
#         @year = year
#         @model = model
#     end
#     def color
#         @color
#     end
#     def color=(value)
#         @color = value
#     end
#     def year 
#         @year
#     end
#     def model=(value)
#         @model = value
#     end
# end

my_car = Car.new("red", 2010, "Focus")
puts my_car.color
puts my_car.color = "blue"
puts my_car.year
puts my_car.year = 2023
puts my_car.model = "Firebird"
puts my_car.inspect

