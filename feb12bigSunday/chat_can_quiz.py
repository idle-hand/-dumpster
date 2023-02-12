def quiz():
  score = 0
  questions = [
    {
      "question": "What is the capital of Alberta?",
      "options": [
        "A) Edmonton",
        "B) Victoria",
        "C) Halifax",
        "D) Quebec City"
      ],
      "answer": "A"
    },
    {
      "question": "What is the capital of British Columbia?",
      "options": [
        "A) Regina",
        "B) Victoria",
        "C) Halifax",
        "D) Quebec City"
      ],
      "answer": "B"
    },
    {
      "question": "What is the capital of Manitoba?",
      "options": [
        "A) Regina",
        "B) Victoria",
        "C) Winnipeg",
        "D) Quebec City"
      ],
      "answer": "C"
    },
    {
      "question": "What is the capital of New Brunswick?",
      "options": [
        "A) Regina",
        "B) Victoria",
        "C) Winnipeg",
        "D) Fredericton"
      ],
      "answer": "D"
    }
  ]
  
  for question in questions:
    print(question["question"])
    for option in question["options"]:
      print(option)
    answer = input("Your answer: ")
    if answer == question["answer"]:
      print("Correct!")
      score += 1
    else:
      print("Incorrect.")
  
  print(f"Your final score is: {score} out of {len(questions)}")

quiz()
