// User can start the quiz by pressing a button
//  User can see a question with 4 possible answers
//  After selecting an answer, display the next question to the User. Do this until the quiz is finished
//  At the end, the User can see the following statistics
// Time it took to finish the quiz
// How many correct answers did he get
// A message showing if he passed or failed the quiz

// user starts test and timer with start button
// questions are pre-stored in a object and rendered to html
//   question has 4 possible answers
//   user clicks answer to show the next question
//   store incorrect answers, the correct answer, and the question in answer object
// once object is all used, stop timer and
//   display stats, pass or fail quiz

const startButton = document.getElementById("start");
const questionsDiv = document.getElementById("question");
const statsDiv = document.getElementById("stats");

startButton.addEventListener("click", function() {
  showNextQuestion(questions);
  startButton.style.display = "none";
});

const showNextQuestion = questions => {
  // loop through object
  for (let i = 0; i < Object.keys(questions).length; i++) {
    // find question that isn't answered
    if (!questions[i]["answered"]) {
      // render question to html
      let questionNumber = i;
      renderQuestion(questions[i], questionNumber);
      break;
    }
  }
  // renderStats();
};

const renderQuestion = (question, questionNumber) => {
  // console.log(`questionNumber = ${questionNumber}`);
  // console.log(question);
  questionsDiv.innerHTML = `<p>${question["title"]}</p>`;
  for (let i = 0; i < question["answers"].length; i++) {
    questionsDiv.innerHTML += `<p class='highlight'>${question["answers"][i]}</p>`;
  }
};

function doesthiswork() {
  alert("hi");
}

const saveAnswer = (questionNumber, chosenAnswer) => {
  console.log("save");
};

const stats = {};

const renderStats = stats => {
  console.log("stats");
};

const questions = [
  {
    title: "What day is it today?",
    answers: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAnswer: "c",
    answered: false
  },
  {
    title: "What's your name?'",
    answers: ["Bob", "Bot", "BAlex", "Ben"],
    correctAnswer: "c",
    answered: false
  },
  {
    title: "What year is it?",
    answers: ["1600", "2000", "2020", "2001"],
    correctAnswer: "b",
    answered: false
  }
];
