const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const resultSection = document.getElementById('result-section');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again-button');

let currentPlayer = 1;
let playerScores = [0, 0];
let currentQuestion = {};

// Sample questions (you can add more)
const questions = [
    { question: "What is 2 + 2?", answer: 4 },
    { question: "What is 5 x 7?", answer: 35 },
    // Add more questions here
];

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', submitAnswer);
playAgainButton.addEventListener('click', playAgain);

function startQuiz() {
    quizSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    currentPlayer = 1;
    playerScores = [0, 0];
    showNextQuestion();
}

function showNextQuestion() {
    if (currentPlayer === 1) {
        questionElement.textContent = questions[playerScores[0] % questions.length].question;
    } else {
        questionElement.textContent = questions[playerScores[1] % questions.length].question;
    }
}

function submitAnswer() {
    const playerAnswer = parseInt(answerInput.value);
    const correctAnswer = currentPlayer === 1 ? questions[playerScores[0] % questions.length].answer : questions[playerScores[1] % questions.length].answer;

    if (playerAnswer === correctAnswer) {
        playerScores[currentPlayer - 1]++;
        resultMessage.textContent = "Correct! +1 point.";
    } else {
        resultMessage.textContent = "Incorrect. No points awarded.";
    }

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    answerInput.value = '';
    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
}

function playAgain() {
    quizSection.classList.remove('hidden');
    resultSection.classList.add('hidden');
    showNextQuestion();
}

// Initially, hide the quiz and result sections
quizSection.classList.add('hidden');
resultSection.classList.add('hidden');
