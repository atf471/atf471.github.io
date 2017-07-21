# from numpy import *

# Each of our grades
kristen_grades = [90, 85, 100, 77, 94]
clarisse_grades = [96, 83, 89, 97, 86]
sapna_grades = [82, 91, 94, 87, 99]

# Class grade book
grade_book = [kristen_grades, clarisse_grades, sapna_grades]

'''
This is what our grade book looks like
[	[90, 85, 100, 77, 94]
	[96, 83, 89, 97, 86]
	[82, 91, 94, 87, 99] ]

'''

# Traverse through the grade book and print all the indivdual grades
for indivitual in grade_book:
	for x in indivitual:
		(x)

# Extensions: Find the class average, median, and standard deviation
# (For the extentions google for hints!)
#CLASS AVERAGE:
print()

total = 0
for n in kristen_grades:
	total += n
	print("The total is now " + str(total))
print(total/(len(kristen_grades)))

total = 0
for n in clarisse_grades:
	total += n
	print("The total is now " + str(total))
print(total/(len(clarisse_grades)))

total = 0
for n in sapna_grades:
	total += n
	print("The total is now " + str(total))
print(total/(len(sapna_grades)))
# kristen = average[0]
# clarisse = average[1]
# sapna = average[2]
# total = (kristen+clarisse+sapna)
# print(total/len(grade_book))

# Super extra extensions: calculate the student with highest/lowest average