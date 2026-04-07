const questions = [
  {
    question:"What does HTML stand for?",
    answers:[
      {text:"Hyper Text Markup Language" ,correct:true},
      {text:"High Tech Modern Language" ,correct:false},
      {text:"Hyper Transfer Markup Language" ,correct:false},
      {text:"Home Tool Markup Language" ,correct:false},
    ]
  },
  {
    question:"Which language is used for styling web pages?",
    answers:[
      {text:"HTML" ,correct:false},
      {text:"CSS" ,correct:true},
      {text:"JavaScript" ,correct:false},
      {text:"Python" ,correct:false},
    ]
  },
  {
    question:"Which of the following is a JavaScript framework?",
    answers:[
      {text:"django" ,correct:false},
      {text:"Laravel" ,correct:false},
      {text:"React" ,correct:true},
      {text:"FLask" ,correct:false},
    ]
  },
  {
    question:"Which of the following is not a programming language?",
    answers:[
      {text:"Python" ,correct:false},
      {text:"Java" ,correct:false},
      {text:"HTML" ,correct:true},
      {text:"C++" ,correct:false},
    ]
  },
  {
    question:"What will typeof null return in JavaScript?",
    answers:[
      {text:"null" ,correct:false},
      {text:"object" ,correct:true},
      {text:"undefined" ,correct:false},
      {text:"string" ,correct:false},
    ]
  }
];

const questionElement=document.getElementById("question");
const answersButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex+ 1;
  questionElement.innerHTML=questionNo+". "+currentQuestion.question;

  currentQuestion.answers.forEach(answer=>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answersButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  });
}

function resetState(){
  nextButton.style.display="none";
  while(answersButtons.firstChild){
    answersButtons.removeChild(answersButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn=e.target;
  const isCorrect=selectedBtn.dataset.correct=="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
Array.from(answersButtons.children).forEach(button=>{
  if(button.dataset.correct==="true"){
    button.classList.add("correct");
  }
  button.disabled=true;
});
nextButton.style.display="block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block";

}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}
nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
       handleNextButton();
  }
  else{
    startQuiz();
  }
});

startQuiz();
