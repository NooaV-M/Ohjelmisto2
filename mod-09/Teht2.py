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

#making car object
new_car = Car("ABC-123",142)

new_car.accelerate(30)
new_car.accelerate(70)
new_car.accelerate(50)

print(f"The cars current speed is {new_car.current_speed} km/h")

new_car.accelerate(-200)

print(f"Registration number: {new_car.registration_number}\nMaximum speed: {new_car.max_speed} km/h\nCurrent speed: {new_car.current_speed} km/h\nCurrent speed: {new_car.current_speed}\nTravelled distance: {new_car.travelled_distance}")

