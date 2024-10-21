#defining car class
class Car:
    def __init__(self,registration_number, maximum_speed):
        self.registration_number = registration_number
        self.max_speed = maximum_speed
        self.current_speed = 0
        self.travelled_distance = 0

#making car object
new_car = Car("ABC-123","142km/h")


print(f"Registration number: {new_car.registration_number}\nMaximum speed: {new_car.max_speed}\nCurrent speed: {new_car.current_speed}\nCurrent speed: {new_car.current_speed}\nTravelled distance: {new_car.travelled_distance}")