const question = document.querySelector( '#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector( '#progressText')
const ScoreText = document.querySelector( '#score')
const progressBarFull = document.querySelector( '#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");
var secondsLeft = 31;
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "s";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);


}
setTime();


//Quiz Questions and answers
let questions = [
    {
        question: 'Arrays in javascript can be used to store:',
        choice1: 'numbers and strings',
        choice2: 'other arrays',
        choice3: 'booleans',
        choice4: 'all of the above',
        answer: 'all of the above',
    },
    {
        question: 'Commonly used data types DO not include:',
        choice1: 'strings',
        choice2: 'booleans',
        choice3: 'alerts',
        choice4: 'numbers',
        answer: 'booleans',
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'Javascript',
        choice2: 'terminal/bash',
        choice3: 'for loops',
        choice4: 'console.log',
        answer: 'for loops',
    },
    {
        question: 'The condition in an if / else statemnent is enclosed with:',
        choice1: 'quotes',
        choice2: 'curley brackets',
        choice3: 'parenthesis',
        choice4: 'square brackets',
        answer: 'paranthesis',
    }
   
]


startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    var currentQuestion = questions [questionCounter]
    question.textContent = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
     })

    //progress bar
    const MAX_QUESTIONS = 4
     progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
   
}
//check answer and subtract time if answer is wrong
function checkAnswer (event) {
    var answer= event.target
    if (!answer.matches (".choice-text")){
        return
    }
    if (answer.value !== questions[questionCounter].answer){
        secondsLeft-= 10;
        if (secondsLeft < 0){
            secondsLeft = 0
        }
        timeEl.textContent = secondsLeft
        setTimeout(function(){
            answer.classList.add("wrong")
        },1000)
        
    } else{
        score+=25 
        setTimeout(function(){
            answer.classList.add("right")
        },1000)
    }
    questionCounter++
    if (secondsLeft<=0 || questionCounter===questions.length){
     
    }
    else{
        getNewQuestion()
    }
}


document.querySelector(".choice-text") .addEventListener("click", checkAnswer)
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

localStorage.setItem('keyName', input.value);