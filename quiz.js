const questionJSON = [
  {
    correctAnswer: "Three",
    options: ["Two", "Three", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = questionJSON.length;
//Accessing all required Elements
const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const scoreDiv = document.getElementById("score");
const nextBtn = document.getElementById("next");

//Manipulating the DOM
function QuizGame() {
  //Destructuring an Object
  const { correctAnswer, options, question } = questionJSON[currentQuestion];
  //Setting question text content
  questionDiv.textContent = question;

  const shuffledAnswers = shuffleOptions(options);

  // Populating OptionsDiv with the optionBtn
  shuffledAnswers.forEach((option) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = option;
    optionsDiv.appendChild(optionBtn);

    //Event handling on the button:
    optionBtn.addEventListener("click", () => {
      if (option == correctAnswer) {
        score++;
      } else {
        score -= 0.25;
      }
      scoreDiv.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}

//
nextBtn.addEventListener("click", () => {
  scoreDiv.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

//Shuffling the Options
function shuffleOptions(answers) {
  for (let i = answers.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[randomIndex]] = [answers[randomIndex], answers[i]];
  }
  return answers;
}

function nextQuestion() {
  currentQuestion++;
  optionsDiv.textContent = "";
  if (currentQuestion >= questionJSON.length) {
    questionDiv.textContent = "Quiz Completed";
    nextBtn.remove();
  } else {
    QuizGame();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  QuizGame();
});
