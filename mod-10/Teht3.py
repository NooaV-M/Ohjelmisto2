import random
from random import randint


#Create elevator class

class Elevator:
    def __init__(self, bottom_floor, top_floor, elevator_num):
        self.bottom_floor = bottom_floor
        self.top_floor = top_floor
        self.current_floor = bottom_floor
        self.elevator_num = elevator_num


    def floor_up(self):
        self.current_floor += 1
        print(f"Elevator {self.elevator_num} is now on floor {self.current_floor}")

    def floor_down(self):
        self.current_floor -= 1
        print(f"Elevator {self.elevator_num} is now on floor {self.current_floor}")

    def go_to_floor(self, floor):
        while floor != self.current_floor:
            if floor > self.current_floor:
                self.floor_up()
            else:
                self.floor_down()

#Create Building class

class Building:
    def __init__(self, bottom_floor, top_floor, number_of_elevators):
        self.elevators = []
        for i in range(number_of_elevators):
            self.elevators.append(Elevator(bottom_floor, top_floor,i+1))
            print(f"Created elevator {i+1}")

    def run_elevators(self, elevator_num, destination_floor):
        self.elevators[elevator_num].go_to_floor(destination_floor)

    def fire_alarm(self):
        print(f"F I R E  A L A R M")
        for elevator in self.elevators:
            elevator.go_to_floor(elevator.bottom_floor)

#Main program

building1 = Building(2, 6, 5)

for elevator in building1.elevators:
    elevator.go_to_floor(randint(elevator.bottom_floor, elevator.top_floor))

building1.fire_alarm()