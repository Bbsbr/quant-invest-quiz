const quizzes = {
  questions: [
    {
      question: "What is the Sharpe Ratio primarily used for?",
      options: [
        "Measuring risk-adjusted return",
        "Predicting market direction",
        "Calculating dividend yield"
      ],
      correct: 0,
      explanation: "The Sharpe Ratio measures the return per unit of risk."
    },
    {
      question: "Which factor model expands on the CAPM by adding size and value factors?",
      options: [
        "Fama-French Three Factor Model",
        "Arbitrage Pricing Theory",
        "Black-Scholes Model"
      ],
      correct: 0,
      explanation: "The Fama-French model adds size and value factors to explain returns."
    }
  ],
  math: [
    {
      question: "If a stock increases from $100 to $120, what is the return (%)?",
      options: ["20%", "10%", "15%"],
      correct: 0,
      explanation: "Return = (120 - 100)/100 = 20%."
    },
    {
      question: "What is the standard deviation of returns if variance is 0.04?",
      options: ["0.2", "0.04", "0.16"],
      correct: 0,
      explanation: "Standard deviation = sqrt(0.04) = 0.2."
    }
  ]
};

let currentSection = "";
let currentIndex = 0;

function startQuiz(section) {
  currentSection = section;
  currentIndex = 0;
  document.querySelector(".section-selector").style.display = "none";
  document.getElementById("quizContainer").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const quiz = quizzes[currentSection][currentIndex];
  document.getElementById("questionText").textContent = quiz.question;
  const answersContainer = document.getElementById("answersContainer");
  answersContainer.innerHTML = "";
  document.getElementById("feedback").textContent = "";

  quiz.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(idx);
    answersContainer.appendChild(btn);
  });
}

function checkAnswer(selectedIdx) {
  const quiz = quizzes[currentSection][currentIndex];
  if (selectedIdx === quiz.correct) {
    document.getElementById("feedback").textContent = "✅ Correct! " + quiz.explanation;
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "❌ Incorrect. " + quiz.explanation;
    document.getElementById("feedback").style.color = "red";
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizzes[currentSection].length) {
    showQuestion();
  } else {
    document.getElementById("quizContainer").innerHTML = "<h2>Quiz Completed!</h2><button onclick='location.reload()'>Restart</button>";
  }
}
