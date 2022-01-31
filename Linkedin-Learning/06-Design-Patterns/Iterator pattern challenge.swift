let animals = ["elephant","lion","fly","snail","owl"]
for animal in animals {
    print(animal)
}

var animalIterator = animals.makeIterator()
while let animal = animalIterator.next() {
    print(animal)
}