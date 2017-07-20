names=["Robin", "Denzel", "Benny", "Karissa", "Joelle", "Azariah"]
user_input=""

while user_input!= "Robin" and user_input!="Denzel" and user_input!="Benny" and user_input!="Karissa" and user_input!="Joelle" and user_input!="Azariah":
	print("Choose a name")
	user_input=input()

print(names)
print("Choose a name")
user_input=input()
if user_input == "Robin" or user_input == "Benny" or user_input == "Joelle":
	print("You picked a good guy! :) ")
elif user_input == "Denzel" or user_input == "Karissa" or user_input == "Azariah":
	print("You picked a bad guy! :( ")




# groceries=["flour", "pasta", "eggs", "cake"]


# print("Range of 3 is") 
# for x in range(len(groceries) // 2):
#	print(groceries[x])

# print(groceries[0])
# print(groceries[1])
# print(groceries[2])

# print(groceries)
# numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

# index= 0

# for g in numbers:
# 	print("index" + str(index) + "number there =" + str(n))
# 	index+=1

