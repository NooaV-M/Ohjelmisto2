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

endrace = False

hour = 0

cars = []

for i in range(10):
    cars.append(Car(("ABC-"+ str(i+1)), random.randint(100,200)))

print("The race begins")
for car in cars:
    print(f"{car.registration_number} has a max speed of {car.max_speed} km/h and has travelled {car.travelled_distance} km")

while not endrace:
    hour += 1
    for car in cars:
        car.accelerate(random.randint(-10,15))
        car.drive(1)
    print(f"after hour {hour}")
    for car in cars:
        print(f"{car.registration_number} has a speed of {car.current_speed} km/h and has travelled {car.travelled_distance} km")
        if car.travelled_distance > 10000:
            endrace = True
print("The race ends")
for car in cars:
    print(f"{car.registration_number} has a max speed of {car.max_speed} km/h and has travelled {car.travelled_distance} km")
