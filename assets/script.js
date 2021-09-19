var startButton = document.getElementById("start-button")
var timer = document.getElementById("timers")
var timeLeft = 60;
var question = document.getElementById("question-box")
var questionDiv = document.getElementById("questionText");
var answerDiv = document.getElementById("answerOptions")
var nextButton = document.getElementById("next-button")
var button = document.createElement("button")
var score = document.createElement("score")






var questionIndex = 0
var questionArray = [
    {
        question: 'does a one legged goose swim in a circle',
        answers: [ 'yes', 'no', 'mostly', 'blue'],
        correct: 'yes'
    },
    {
        question: 'A villian in batman',
        answers: ['Martha Stewart', 'The Orange', 'The Penguin', 'Ironman' ],
        correct: 'The Penguin'
    },
    {
        question: 'Is your refridgerator running?',
        answers: ['yes', 'no', 'not since the accident', 'cousin' ],
        correct: 'no'
    },
    {
        question: 'what color is grass',
        answers: ['yes', 'red', 'green', 'blue' ],
        correct: 'green'
    },
    {
        question: 'what is the meaning of life',
        answers: [ 'Love', 'Fufillment', '42', 'Mochi'],
        correct: '42'
    },
    {
        question: ' 6 x 6',
        answers: ['36', '40', '66', '6x6' ],
        correct: '36'
    },
    {
        question: 'Computers are smart',
        answers: [ 'yes', 'no', 'smarter than you realize, human', 'beep boop'],
        correct: 'no'
    },
    {
        question: 'UCF is pronounced how:',
        answers: [ 'you-see-ef', 'ooo-see-ef', 'you-cef', 'you'],
        correct: 'you-see-ef'
    },
    {
        question: 'This class is hard',
        answers: [ 'too hard', 'no', 'yes, but i wont give up', 'kind'],
        correct: 'yes, but i wont give up'
    },
]

function nextquestion(){
    var initialQuestion = questionArray[questionIndex]
    questionDiv.textContent = initialQuestion.question;
    for (let i = 0; i < initialQuestion.answers.length; i++){
        let element = initialQuestion.answers[i]
        var button = document.createElement('button')
        button.setAttribute("class", '.btn')
        button.setAttribute("data-answer", element)
        button.innerHTML = element
        answerDiv.appendChild(button)
        console.log(element);
        button.addEventListener('click', function(event){
            var currentQuestionCorrect = questionArray[questionIndex].correct;
            var currentAnswer = event.target.getAttribute("data-answer")
            console.log("currentAnswer" , currentAnswer)
            console.log("currentQuestionCorrect" ,currentQuestionCorrect)

            if(currentAnswer === currentQuestionCorrect){
                var correct = document.createElement('div')
                document.body.appendChild(correct)
                answerDiv.innerHTML =''
                
                questionIndex++
                nextquestion()
            }else{
                answerDiv.innerHTML =''
                questionIndex++
                nextquestion()
            }


            if(currentAnswer !== currentQuestionCorrect){
                timeLeft = timeLeft - 10
                quizScore = quizScore - 1

            }

            if (currentQuestionIndex > question.length){
                startRecord();
            }
        })
    }
}

function countdown (){
    

    var timeInterval = setInterval(function(){
        if (timeLeft >1){
            timer.textContent = timeLeft + 'seconds left';
            timeLeft--;
            console.log(timeLeft)
        } else if(timeLeft === 1){
            timer.textContent= timeLeft +'seconds left';
        }
        
        // if (!answer){
        //     timer.textContent = - 10 seconds
        // }
        
        if(timeLeft === 0){
            timer.textContent="";
            clearInterval(timeInterval);
            windows.alert("you lose");
        }
       
    }, 1000);
}



startButton.addEventListener("click", startGame)

function startGame(){
    // window.location.href = "highscore.html"
    countdown();
    console.log('goose')
    startButton.classList.add('hide')
    question.classList.remove('hide')
    nextquestion();
   

}

function startRecord (){
    question.classList.add('hide')
    preventDefault();
    let record = {
        initials: document.getElementById('userInitials').value,

    }

}






// function questionTwo(){
//     let questionText= {
//         title: 'What is the mascot for Orlandos Soccer team?',
//         answers: ['tiger', 'bear','lion','Chanticleer'],
//         correct: [0]
//     }
// }



// function nextQuestion(){
//     showQuestion()
// }

// function showQuestion(question){

// }

// function pickAnswer(){

// }