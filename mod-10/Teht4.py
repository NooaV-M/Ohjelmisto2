import random

#defining car class
class Car:
    def __init__(self,registration_number, maximum_speed):
        self.registration_number = registration_number
        self.max_speed = maximum_speed
        self.current_speed = 0
        self.travelled_distance = 0

    def accelerate(self,change_of_speed):
        if self.current_speed + change_of_speed > self.max_speed:
            self.current_speed = self.max_speed
        else:
            self.current_speed += change_of_speed

    def drive(self,hours_travelled):
        self.travelled_distance += hours_travelled*self.current_speed

#defining race class (yikes)

class Race:
    def __init__(self,name, distance, cars):
        self.name = name
        self.distance = distance
        self.cars = cars
        self.hour = 0

    def hour_passes(self):
        self.hour += 1
        for car in cars:
            car.accelerate(random.randint(-10, 15))
            car.drive(1)
            if car.travelled_distance > 10000:
                endrace = True

    def print_status(self):
        print(f"after hour {self.hour}")
        for car in cars:
            print(f"{car.registration_number} has a current speed of {car.current_speed} km/h and has travelled {car.travelled_distance} km")

    def race_finished(self):
        for car in cars:
            if car.travelled_distance > self.distance:
                return True

endrace = False

cars = []

for i in range(10):
    cars.append(Car(("ABC-"+ str(i+1)), random.randint(100,200)))

derby = Race("Grand Demolition Derby", 8000, cars)

print("The race begins")
while endrace is not True:
    for i in range(10):
        derby.hour_passes()
        if derby.race_finished():
            endrace = True
    derby.print_status()
print("The race ends")
derby.print_status()