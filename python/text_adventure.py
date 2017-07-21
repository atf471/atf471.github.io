start = '''
You wake up one morning and rub your eyes. 
Your vision is still a little blurry, but you manage to make out the time.
It reads 9:00- OH NO YOU'RE 30 MINUTES LATE TO SCHOOL!
You throw on some clothes and run out of your house, speed walking to school.
On your way, you see a plastic bag lying on the ground. 
There is a garbage can next to you. 
What do you do?

'''


print(start)
user_input=""

while user_input != "pickup" and user_input != "continue":
	print("Type 'pickup' to pick up & throw out or 'continue' to continue speed-walking to school.")
	user_input = input()

if user_input == "pickup":
	print()
	print("You decide to pick up the plastic bag and throw it out. Congratulations! You've just helped an animal avert accidently swallowing the bag and choking to death. You make it to school, but now an hour late for pausing to pick up the bag. It's now lunch time and you & your friend are done eating lunch. Your friend decides to toss his tray on the floor saying, 'Don't worry, someone will clean it up'.")
	# finished the story by writing what happens

	while user_input != "scold" and user_input != "shrug":
		user_input=input("Type 'scold' to yell at your friend to be responsible or 'shrug' to agree with your friend and leave it there.")

	if user_input == "scold":
			print()
			print("You scold your friend and tell him that he's not 5 anymore. He finally picks it up and throws it out in the trash can. Congratulations! You've helped someone take responsibility!")
	elif user_input == 'shrug':
			print()
			print("You and your friend leave his tray behind, but you continue to have a lingering guilt for the rest of the day.")

elif user_input == "continue":
	print()
	print("You choose to continue speed-walking to school so you're not any more late than you already are, however you feel guilty the rest of the way to school. It's now 6th period and you have AP Comp.Sci. Before the lesson starts, you see your teacher finish a can of Sprite and toss it in the trash bin instead of the recycling bin.") 
	# finished the story writing what happens

	while user_input != "tell" and user_input != "ignore":
		user_input=input("Type 'tell' to tell your teacher to recycle her can or 'ignore' to let your teacher start class.")
		
	if user_input == "tell":
			print()
			print("You decide to tell your teacher to recycle her can and she says 'Oh I didn't even realize! Thank you for telling me!'. Because of your action, your teacher reminds the class to make use of the recycling bin and acknowledges you!")
	elif user_input == 'ignore':
			print()
			print("Your teacher starts class, but you can't concentrate because of the guilt that's searing through you throughout class.")


 