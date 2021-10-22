let answersContainer=document.querySelector(".Answers");
const questionsArray=["Question1","Question2","Question3","Question4","Question5"];
const answersArray=["Answer1","Answer2","Answer3","Answer4","Answer5"];
for(i=0;i<questionsArray.length;i++){
    console.log(questionsArray[i]);
    let newDiv=document.createElement("div");
    newDiv.setAttribute("class",`Question${i+1}`);
    console.log(newDiv);
    newDiv.innerHTML=questionsArray[i];
    answersContainer.append(newDiv);

    let newSection=document.createElement("section");
    newSection.setAttribute("id",`ans${i+1}`);
    console.log(newSection);
  
    newDiv.append(newSection);
    let newParagraph=document.createElement("p");
    newParagraph.innerHTML=answersArray[i];
    newSection.append(newParagraph);






}