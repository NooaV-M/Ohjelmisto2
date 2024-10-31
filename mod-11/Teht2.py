class Car:
    def __init__(self,registration_number, maximum_speed):
        self.registration_number = registration_number
        self.max_speed = maximum_speed
        self.current_speed = 2
        self.travelled_distance = 0

    def accelerate(self,change_of_speed):
        if self.current_speed + change_of_speed > self.max_speed:
            self.current_speed = self.max_speed
        else:
            self.current_speed += change_of_speed

    def drive(self,hours_travelled):
        self.travelled_distance += hours_travelled*self.current_speed

class GasolineCar(Car):
    def __init__(self,registration_number, maximum_speed, battery_capacity):
        super().__init__(registration_number, maximum_speed)
        self.battery_capacity = battery_capacity

class ElectricCar(Car):
    def __init__(self,registration_number, maximum_speed, tank_volume):
        super().__init__(registration_number, maximum_speed)
        self.tank_volume = tank_volume

cars = []

cars.append(GasolineCar("ABC-15","180 km/h","52.5 kWh"))
cars.append(ElectricCar("ACD-123", "165 km/h", "32.3 l"))

for car in cars:
    car.drive(3)
    print(f"{car.registration_number} travelled {car.travelled_distance} km")