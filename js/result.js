if(!localStorage.getItem("users")||!sessionStorage.getItem("signedInUser")){
    window.location.href = 'index.html';
}
else{
const questionNavLink=document.querySelector("nav ul li a.active")
questionNavLink.style.cursor="unset";
questionNavLink.innerHTML=JSON.parse(sessionStorage.getItem("signedInUser"))
let ratio=document.getElementById("percentageSpan");
let Quizz=JSON.parse(localStorage.getItem("Quiz"));
let Answers=JSON.parse(localStorage.getItem("Answers"))

const totalQuestions=document.querySelector("#total1");
const correctAnswersTd=document.querySelector("#correct1");
const wrongAnswersTd=document.querySelector("#wrong1");
const percentageTd=document.querySelector("#percentage1");
const totalScoreTd=document.querySelector("#score1");
const logoutBtn=document.querySelector("#LogOut1");

totalQuestions.innerHTML=Quizz.length;

let numOfCorrectAnswers=0;
function getTheNumOfCorrectAnswers(){
    for (let i = 0; i < Quizz.length; i++) {
        if(Quizz[i].answer==Answers[i]){
            numOfCorrectAnswers++;
        }
    }
}
getTheNumOfCorrectAnswers();
console.log(numOfCorrectAnswers)
correctAnswersTd.innerHTML=numOfCorrectAnswers
wrongAnswersTd.innerHTML=Quizz.length-numOfCorrectAnswers

percentageTd.innerHTML=`<span id="percentageSpan">${numOfCorrectAnswers/Quizz.length*100}</span>%`
totalScoreTd.innerHTML=numOfCorrectAnswers/Quizz.length*100

/**************************** */
/*********** pass\ fail theme********** */
/**************************** */

if(totalScoreTd.innerHTML>=60) {
    document.getElementById("percentage1").style.color="green";
    document.getElementById("percentage").style.color="green";
    document.getElementById("score").style.color="green";
    document.getElementById("score1").style.color="green";
 
}else{    document.getElementById("percentage1").style.color="red";
document.getElementById("percentage").style.color="red";
document.getElementById("score").style.color="red";
document.getElementById("score1").style.color="red";
}
// -------------------------------
// logoutBtn

logoutBtn.addEventListener("click",removeStorageAndRedirect)
function removeStorageAndRedirect(e){
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    window.location.href='index.html';
}
}