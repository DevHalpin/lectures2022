class Car
  attr_accessor :color
  # attr_reader :color
  # attr_writer :color
  def initialize(color, year, model)
    @color = color
    @year = year
    @model = model
  end
end

class Car
  attr_accessor :color
  # attr_reader :color
  # attr_writer :color
  def initialize(color, year, model)
    @color = color
    @year = year
    @model = model
  end
  def color 
    @color
  end
  def color=(value)
    @color = value
  end
end

my_car = Car.new("red", 2008, "matrix")
my_car2 = Car.new("blue", 2023, "leaf")
puts my_car.color
puts my_car2.color