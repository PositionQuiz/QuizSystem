// -----------------------
// ------- target the section buttons-------
const testDescBtn = document.querySelector(".column.pd button");
const positionDescLink = document.querySelector(
  "header nav a.positionDescLink"
);
const testDescLink = document.querySelector("header nav a.testDescLink");
const loginToStartBtn = document.querySelector(".column.td button");

const links = document.querySelectorAll("header nav ul li a");
const columns = document.querySelectorAll(".row .column");

// ----------------------------
// ----------- the events functionality --------
links[0].addEventListener("click", showPositionDescSection);
function showPositionDescSection() {
  toggleActive(columns, columns[0]);
  toggleActive(links, links[0]);
}

links[1].addEventListener("click", showTestSection);
testDescBtn.addEventListener("click", showTestSection);
function showTestSection() {
  toggleActive(columns, columns[1]);
  toggleActive(links, links[1]);
}

links[2].addEventListener("click", showContactUsSection);
function showContactUsSection() {
  toggleActive(columns, columns[4]);
  toggleActive(links, links[2]);
}

loginToStartBtn.addEventListener("click", showLoginSection);
links[3].addEventListener("click", showLoginSection);
function showLoginSection() {
  toggleActive(columns, columns[2]);
  toggleActive(links, links[3]);
}

function toggleActive(array, activeElement) {
  array.forEach((element) => {
    element.classList.remove("active");
  });
  activeElement.classList.add("active");
}

const loginForm = document.querySelector("form[name='login']");
loginForm.addEventListener("submit", loginTheUser);
/*-----------------------*/
/*-------- prevent the refresh -----*/
function loginTheUser(e) {
  e.preventDefault();
  let username = e.target.username.value;
  let password = e.target.password.value;

  let exist = false;

  for (let i = 0; i < usersArray.length; i++) {
    if (
      usersArray[i].username == username.toLowerCase() &&
      usersArray[i].password == password
    ) {
      toggleActive(columns, columns[5]);
      document.getElementById("showUserName").innerHTML = username;
      let loginLink = document.querySelector(".loginLink");
      loginLink.innerHTML = username;
      links[0].parentElement.style.display = "none";
      links[1].parentElement.style.display = "none";
      links[2].parentElement.style.display = "none";

      links[3].style.cursor="unset";
      links[3].removeEventListener("click", showLoginSection);
      sessionStorage.setItem("signedInUser", JSON.stringify(username));
      exist = true;
      return;
    }
  }
  if (!exist) {
    document.getElementById("errorLogin").innerHTML =
      "Your Username or Password is incorrect!";
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

let usersArray = [];
/******************************* */
/**********save the previous data storage ********* */
/******************************* */
if (localStorage.getItem("users")) {
  let storageData = JSON.parse(localStorage.getItem("users"));
  storageData.forEach((data) => {
    usersArray.push(data);
  });
}

const registerForm = document.querySelector("form[name='Register']");
registerForm.addEventListener("submit", RegisterTheUser);
function RegisterTheUser(e) {
  e.preventDefault();
  /*************************** */
  /**********fetch the user inputs******** */
  let username = e.target.username.value;
  let password = e.target.password.value;
  let password2 = e.target.password2.value;

  /************************ */
  /********check match passwords********* */
  if (password !== password2) {
    checkPswMatch.innerHTML = "The Password Doesn't Match";
  } else {
    /**************** */
    /****check if the user exist ****** */

    let exist = false;

    for (let i = 0; i < usersArray.length; i++) {
      if (usersArray[i].username.toLowerCase() == username.toLowerCase()) {
        document.getElementById("userExist").innerHTML =
          "The username is already registered, Please Sign in";
        exist = true;
        return;
      }
    }
    if (!exist) {
      toggleActive(columns, columns[5]);
      document.getElementById("showUserName").innerHTML = username;
      let loginLink = document.querySelector(".loginLink");
      loginLink.innerHTML = username;

      links[0].parentElement.style.display = "none";
      links[1].parentElement.style.display = "none";
      links[2].parentElement.style.display = "none";
      links[3].style.cursor="unset";

      links[3].removeEventListener("click", showLoginSection);
    }
    /*****add the user if not exist before****** */
    let newUser = new User(username.toLowerCase(), password);
    usersArray.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersArray));
    sessionStorage.setItem("signedInUser",JSON.stringify(username))
  }
}

let submitCheck = document.getElementById("registerSubmitBtn");
submitCheck.style.visibility = "hidden";

function checkPsw() {
  let password = document.getElementById("registerPassword").value,
    password2 = document.getElementById("password2").value;
  let checkLength = document.getElementById("checkLength"),
    checkMatch = document.getElementById("checkMatch");

  if ((password !== 6 && password2 !== 6) || password !== password2) {
    submitCheck.style.visibility = "hidden";
    document.getElementById("checkLength").style.color = "red";
    document.getElementById("checkMatch").style.color = "red";
    checkLength.innerHTML = "The Password is Short";
    checkMatch.innerHTML = "Passwords do not match";

    if (password.length >= 6) {
      document.getElementById("checkLength").style.color = "green";
      checkLength.innerHTML = "Password length is good!";
    }

    if (password === password2) {
      document.getElementById("checkMatch").style.color = "green";
      checkMatch.innerHTML = "Password matching!";
      submitCheck.style.visibility = "visible";
    }
    if (password.length < 6 || password2.length < 6 || password !== password2) {
      submitCheck.style.visibility = "hidden";
    } else {
      submitCheck.style.visibility = "visible";
    }
  }
}

const regesterLink = document.querySelector(
  "form[name='login'] td a.registerLink"
);
const goToLoginLink = document.querySelector(
  "form[name='Register'] td a.goToLoginLink"
);

goToLoginLink.addEventListener("click", showLoginSection);
console.log(regesterLink);

regesterLink.addEventListener("click", showRegisterSection);
function showRegisterSection() {
  toggleActive(columns, columns[3]);
}
/************************************************* */
/*****Burger menu******** */
let burgerBtn=document.querySelector(".burgerMenu");
let menu=document.querySelector(".header nav ul");
burgerBtn.addEventListener("click",showMenu)
function showMenu(){
  menu.classList.toggle("active");
}
