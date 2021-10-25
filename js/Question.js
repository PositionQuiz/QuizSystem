if(!localStorage.getItem("users")||!sessionStorage.getItem("signedInUser")){
    window.location.href = 'index.html';
}
else{
    let Quizz = [{
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "Which CSS property controls the text size?",
        answer: "font-size ",
        options: [
            "text-style",
            "text-size",
            "font-style",
            "font-size "
        ]
    },
    {
        numb: 4,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: [
            "function = myFunction()",
            "function:myFunction()",
            "myFunction(function)",
            "function myFunction()"
        ]
    },
    {
        numb: 5,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onchange",
            "onclick",
            "onmouseclick",
            "onmouseover"
        ]
    },
    //   {
    //   numb: 6,
    //   question: "test",
    //   answer: "Option1",
    //   options: [
    //     "Option1",
    //     "option2",
    //     "option3",
    //     "option4"
    //   ]
    // },
];
// **********************************************************************************************

const questionNavLink=document.querySelector("nav ul li a.active")
questionNavLink.style.cursor="unset";
questionNavLink.innerHTML=JSON.parse(sessionStorage.getItem("signedInUser"))
const optionList = document.querySelector(".option-Question");
const nextButton = document.querySelector("#bttnQ");
const questionNumber = document.querySelector(".question-Number");
let numberofQuestion = 0;
let numberofQuestionNext = 0;
let counter;
let counterLine;
let lastAnswer="";
let userScore = 0;
let lastAnswerArray=[]
nextButton.style.visibility = "hidden";
nextButton.onclick = () => {
    lastAnswerArray.push(lastAnswer)
    console.log(lastAnswerArray)
    if (numberofQuestion < Quizz.length - 1) {
        numberofQuestion++;
        numberofQuestionNext++;
        showQuestions(numberofQuestion);
        submitQuestion(numberofQuestionNext);
        nextButton.style.visibility = "hidden";

        if (numberofQuestion == Quizz.length - 1) {
            let submitBtn= document.getElementById("bttnQ");
            submitBtn.innerHTML = "Submit";
            submitBtn.addEventListener("click",doSomething)
        }
    }
}
function doSomething(){
    localStorage.setItem("Answers",JSON.stringify(lastAnswerArray))
    console.log("yaser")
    window.location.href = 'result.html';
}
function submitQuestion(index) {
    let totalQuestion = ' <span><p>' + ' Questions ' + (index + 1) + '</p> ' + ' <p>&nbsp' + ' of ' + '&nbsp</p> ' + Quizz.length + ' </p></span> ';
    questionNumber.innerHTML = totalQuestion;
}

function showQuestions(index) {
    let totalQuestion = ' <span><p>' + ' Questions ' + (index + 1) + '</p> ' + ' <p>&nbsp' + ' of ' + '&nbsp</p> ' + Quizz.length + ' </p></span> ';
    questionNumber.innerHTML = totalQuestion;

    localStorage.setItem("Quiz",JSON.stringify(Quizz) )
    const questuion_Text = document.querySelector(".questuion-Text");
    let que_tag = '<span>' + Quizz[index].numb + ". " + Quizz[index].question + '</span>';
    let option_tag =
        '<div class="option"><span>' + Quizz[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + Quizz[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + Quizz[index].options[2] + '</span></div>' +
        '<div class="option"><span>' + Quizz[index].options[3] + '</span></div>';
    questuion_Text.innerHTML = que_tag;
    optionList.innerHTML = option_tag;

    const option = optionList.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


function optionSelected(answer) {
    // let correctAnswer = Quizz[numberofQuestion].answer;
    for (let i = 0; i < optionList.children.length; i++) {
        optionList.children[i].style.backgroundColor = "#b8b5c6";
    }

    answer.style.backgroundColor = "#bd8da8"
    
    lastAnswer=answer.textContent;
    nextButton.style.visibility = "visible";
}
}
