// Sample quiz data (replace this with your actual quiz data)
const quizData = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
   /* {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "N2", correct: false }
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Mercury", correct: false },
            { text: "Earth", correct: false },
            { text: "Uranus", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false }
        ]
    },
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Hippopotamus", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "J.K. Rowling", correct: false }
        ]
    }  */
    // Add more quiz questions here...
];

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const quizNumElement = document.getElementById("quizNum");
const totalQuizElement = document.getElementById("totalQuiz");
const normalScoreElement = document.getElementById("normalScore");
const exactScoreElement = document.getElementById("exectScore");

let currentQuizIndex = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        setNextQuestion();
    } else {
        // Quiz ended, show score or any other action
        endQuiz();
    }
});

function startQuiz() {
    alert("Note :- you only select Answer once ! click ok");
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(quizData[currentQuizIndex]);
}

function showQuestion(questionData) {
    questionElement.innerText = questionData.question;
    quizNumElement.innerText = currentQuizIndex + 1;
    totalQuizElement.innerText = quizData.length;

    questionData.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            if (answer.correct) {
                button.classList.add("correct");
                score++;
                exactScoreElement.innerText = score;
            } else {
                button.classList.add("incorrect");
            }
            normalScoreElement.innerText = score;
            disableAnswerButtons();
        });
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add("hidden");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function disableAnswerButtons() {
    const buttons = answerButtons.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if(i <= 0){
           // alert("you only select once !");
        };
    } 
    nextBtn.classList.remove("hidden");
}

function endQuiz() {
    // Display end of quiz message or any other action
    nextBtn.textContent = "Submit";
    nextBtn.addEventListener('click', function(){
        quizContainer.classList.add("hidden");
        let h3 = document.querySelector('#result');
        h3.textContent = `Quiz ended. Your score is: ${score}`;
        let win = document.querySelector('#win');
        win.classList.remove("hidden");

    })
}
