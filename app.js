function runQuiz() {
    // Sample quiz array
    const quiz = [
        {
            question: "What is a Non-Premitive Data Types in JavaScript?",
            options: ["1. Boolean", "2. Numbers", "3. Arrays", "4. Null"],
            answer: 2
          },
          {
            question: "What would be the result of 3+2+”7″?",
            options: ["1. 12", "2. 57", "3. 17", "4. 60"],
            answer: 1
          },
          {
              question: "What is used to declare a constant in JavaScript?",
              options: ["1. let", "2. var", "3. const", "4. that"],
              answer: 2
            },
            {
              question: "What is a prompt box?",
              options: ["1. It's a Happy Meal", "2. A variable to increase the speed of the code", "3. Cause (someone) to take a course of action", "4. A dialog box with an optional message prompting the user to input some text"],
              answer: 3
            },
            {
              question: "In JavaScript, Strings are mutable?",
              options: ["1. TRUE", "2. FALSE",],
              answer: 1
            },
            {
              question: "An array in JavaScript is a data structure used to?",
              options: ["1. Store related data collections", "2. Reuse blocks of code designed to perform specific tasks", "3. Store multiple values in a single variable", "4. All of them"],
              answer: 2
            },
            {
              question: "Which symbol is used for a single-line comment in JavaScript? ",
              options: ["1. ///@///", "2. ==>", "3. //","4. #"],
              answer: 2
            },
            {
              question: "What is an undefined variable?",
              options: [" 1. It occurs when a variable is declare but not assign any value", "2. A function that determines whether the passed value is ::Not A Number::", "3. It's a constant value represents the lowest available value", "4. None"],
              answer: 0
            },
            {
              question: "What is a looping structures in JavaScript?",
              options: ["1. do loop", "2. while for", "3. for loop", "4. while do"],
              answer: 2
            },
            {
              question: "What are the types of Pop up boxes available in JavaScript?",
              options: ["1. Alert", "2. Confirm", "3. Promp", "4. All of the above"],
              answer: 3
            },
            {
              question: "What is one way an HTML element can be accessed in JavaScript code? ?",
              options: ["1. let", "2. var", "3. const", "4. getElementByClass()"],
              answer: 2
            },
            {
              question: "What is DOM querySelector??",
              options: ["1. It is used to get the element by its id name", "2. It is used to get all the elements that have the given classname", "3. It's used to find the first HTML element that matches a specified CSS selector.", "4. It is an object that represents the result of an asynchronous operation"],
              answer: 2
            },
            {
              question: " What is the result of the following code 'console.log([] + []);' ?",
              options: ["1. null", "2. undefined", "3. ''", "4. []"],
              answer: 2
            },
            {
              question: "What will be the result of the following code? let x = 10; let y = (x++, x + 1, x * 2); console.log(y);",
              options: ["1. 22", "2. 12", "3. 21", "4. 20"],
              answer: 0
            },
            {
              question: "Inside which HTML element do we put the JavaScript?",
              options: ["<1. js>", "2. <javascript>", "3. <script>", "4. scripting"],
              answer: 2
            },
    ];

    let score = 0; // Initialize the score

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        let userAnswer;

        // Display the question and options
        console.log(`Question ${i + 1}: ${currentQuestion.question}`);
        currentQuestion.options.forEach(option => console.log(option));

        // Prompt the user for their answer with validation
        while (true) {
            userAnswer = parseInt(prompt("Enter the number of your answer:"));

            if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= currentQuestion.options.length) {
                break;
            } else {
                console.log("Invalid input. Please enter a number between 1 and " + currentQuestion.options.length + ".");
            }
        }

        // Check if the answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            console.log("Correct!");
            score++;
        } else {
            console.log("Wrong! The correct answer was: " + currentQuestion.options[currentQuestion.correctAnswer - 1]);
        }
        console.log("\n"); // Add a blank line for better readability
    }

    // Display the final score and summary
    console.log(`You completed the quiz! Your score: ${score}/${quiz.length}`);
    if (score === quiz.length) {
        console.log("Excellent job! You answered all questions correctly.");
    } else if (score >= quiz.length / 2) {
        console.log(`Great job! You answered ${score} out of ${quiz.length} questions correctly.`);
    } else {
        console.log(`You answered ${score} out of ${quiz.length} questions correctly. Better luck next time!`);
    }
}

// Run the quiz function
runQuiz();
