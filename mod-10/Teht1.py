#Create elevator class

class Elevator:
    def __init__(self, bottom_floor, top_floor):
        self.bottom_floor = bottom_floor
        self.top_floor = top_floor
        self.current_floor = bottom_floor

    def floor_up(self):
        self.current_floor += 1
        print(f"The elevator is now on floor {self.current_floor}")

    def floor_down(self):
        self.current_floor -= 1
        print(f"The elevator is now on floor {self.current_floor}")

    def go_to_floor(self, floor):
        while floor != self.current_floor:
            if floor > self.current_floor:
                self.floor_up()
            else:
                self.floor_down()

#Main program

hissi = Elevator(1, 7)

hissi.go_to_floor(5)
hissi.go_to_floor(hissi.bottom_floor)