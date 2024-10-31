
class Publication:
    def __init__(self, name):
        self.name = name

    def print_information(self):
        print(self.name)

class Magazine(Publication):
    def __init__(self, name, chief_editor):
        self.chief_editor = chief_editor
        super().__init__(name)

    def print_information(self):
        Publication.print_information(self)
        print(f"Chief Editor: {self.chief_editor}")


class Book(Publication):
    def __init__(self, name, author, page_count):
        self.author = author
        self.page_count = page_count
        super().__init__(name)

    def print_information(self):
        Publication.print_information(self)
        print(f"Author: {self.author}\nPage Count: {self.page_count}")

publications = []

publications.append(Magazine("Donald Duck","Aki Hyyppä"))
publications.append(Book("Compartment No. 6","Rosa Liksom","192"))

for p in publications:
    p.print_information()
    print()