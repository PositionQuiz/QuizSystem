 let Quiz=JSON.parse(localStorage.getItem("Quiz"));
 let usersAnswerArray=JSON.parse(localStorage.getItem("Answers"));
let questionsArray=[];
let answersArray=[];
for (let i = 0; i < Quiz.length; i++) {
    questionsArray.push(Quiz[i].question);
    answersArray.push(usersAnswerArray[i]);
//   console.log(Quiz[i].answer);    
}
let answersContainer=document.querySelector(".Answers");
for(i=0;i<questionsArray.length;i++){
    let newDiv=document.createElement("div");
    newDiv.setAttribute("class",`Question${i+1}`);
    newDiv.innerHTML=questionsArray[i];
    answersContainer.append(newDiv);
    let newSection=document.createElement("section");
    newSection.setAttribute("id",`ans${i+1}`);
    newDiv.append(newSection);
    let newParagraph=document.createElement("p");
    newParagraph.innerHTML=answersArray[i];
    newSection.append(newParagraph);
}