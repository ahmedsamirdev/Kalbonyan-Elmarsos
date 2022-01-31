var perStudentPetCount = [0, 1, 0, 2, 1, 1, 4, 0, 2, 2, 4]

var numOfStudents = perStudentPetCount.count

print(perStudentPetCount[3])

print(numOfStudents)

var sum = 0

for individualPetCount in perStudentPetCount {
	sum = sum + individualPetCount
}

print(sum)

var average = sum / numOfStudents

print(average)
