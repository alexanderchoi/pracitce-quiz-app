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

const startButton = document.getElementById("startButton");
const questionsDiv = document.getElementById("question");
const statsDiv = document.getElementById("stats");
const startOverButton = document.getElementById("startOverButton");
let questionsAnswered = 0;
let stats = [];

startButton.addEventListener("click", function() {
  showNextQuestion();
  startButton.style.display = "none";
});

startOverButton.addEventListener("click", function() {
  startOverButton.style.display = "none";

  stats = [];
  statsDiv.innerHTML = "";
  statsDiv.style.display = "none";

  for (let i = 0; i < questions.length; i++) {
    questions[i]["answered"] = false;
  }

  questionsDiv.style.display = "block";
  showNextQuestion();
});

const showNextQuestion = () => {
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
  if (questionsAnswered == Object.keys(questions).length) {
    questionsDiv.style.display = "none";
    renderStats();
  }
};

const renderQuestion = (question, questionNumber) => {
  questionsDiv.innerHTML = `<p>${question["title"]}</p>`;
  for (let i = 0; i < question["answers"].length; i++) {
    const p = document.createElement("p");
    p.classList.add("highlight");
    p.appendChild(new Text(question["answers"][i]));
    p.addEventListener("click", () => saveAnswer(i));
    questionsDiv.appendChild(p);
  }
};

const saveAnswer = answerNumber => {
  let answeredQuestion = questions[questionsAnswered];
  answeredQuestion["answer"] = answerNumber;
  stats.push(answeredQuestion);
  questions[questionsAnswered]["answered"] = true;
  questionsAnswered++;
  showNextQuestion();
};

const renderStats = () => {
  const numQuestions = Object.keys(stats).length;
  let numCorrect = 0;
  for (let i = 0; i < numQuestions; i++) {
    let answer = stats[i]["answer"];
    let correctAnswer = stats[i]["correctAnswer"];
    if (answer === correctAnswer) {
      numCorrect++;
    } else {
      const question = document.createElement("p");
      question.appendChild(new Text(questions[i]["title"]));
      const yourAnswer = document.createElement("p");
      yourAnswer.appendChild(
        new Text(`Your answer: ${questions[i]["answers"][answer]}`)
      );
      const correct = document.createElement("p");
      correct.appendChild(
        new Text(`Correct answer: ${questions[i]["answers"][correctAnswer]}`)
      );
      statsDiv.appendChild(question);
      statsDiv.appendChild(yourAnswer);
      statsDiv.appendChild(correct);
    }
  }
  const score = document.createElement("p");
  score.appendChild(new Text(`Your score: ${numCorrect}/${numQuestions}`));
  statsDiv.prepend(score);
  startOverButton.style.display = "block";
};

const questions = [
  {
    title: "What day is it today?",
    answers: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctAnswer: 2,
    answered: false
  },
  {
    title: "What's your name?",
    answers: ["Bob", "Bot", "Balex", "Ben"],
    correctAnswer: 2,
    answered: false
  },
  {
    title: "What year is it?",
    answers: ["1600", "2000", "2020", "2001"],
    correctAnswer: 1,
    answered: false
  }
];
