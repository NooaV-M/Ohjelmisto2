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