if(!localStorage.getItem("users")||!sessionStorage.getItem("signedInUser")){
    window.location.href = 'index.html';
}
else
{
    let answerNavLink=document.querySelector("nav ul li a.active");
    answerNavLink.textContent="Logout";
    answerNavLink.addEventListener("click",logoutFunc)
    function logoutFunc(){
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = 'index.html';
    }
  let Quiz = JSON.parse(localStorage.getItem("Quiz"));
  let usersAnswerArray = JSON.parse(localStorage.getItem("Answers"));
  let answersContainer = document.querySelector(".Answers");
  let questionsArray = [];
  let answersArray = [];
  let answersStatus = [];
  for (let i = 0; i < Quiz.length; i++) {
    questionsArray.push(Quiz[i].question);
    answersArray.push(usersAnswerArray[i]);
    answersStatus.push(Quiz[i].answer == usersAnswerArray[i]);
  }

  /******************** */
  /******loop to create and show the questions and answers ******** */
  for (i = 0; i < questionsArray.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", `Question`);
    newDiv.innerHTML = questionsArray[i];
    answersContainer.append(newDiv);
    let newSection = document.createElement("section");
    newSection.setAttribute("id", `ans`);
    newDiv.append(newSection);
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = answersArray[i];
    if (answersStatus[i] != true) {
      newParagraph.style.color = "#8e4043";
    } else {
      newParagraph.style.color = "#408e64";
    }
    newSection.append(newParagraph);
  }
}
