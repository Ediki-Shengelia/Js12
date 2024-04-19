"use strict";

let formEl = document.getElementById("login");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  let usernamevalue = document.getElementById("usernamefield").value;

  if (usernamevalue === "") {
    errors.username = "username value can not be empty";
  }
  let passw1 = document.getElementById("passwordfield").value;
  let passw2 = document.getElementById("passwordfield2").value;

  if (passw1 === "") {
    errors.passw = "password value can not be empty";
  }
  if (passw1 !== passw2) {
    errors.passw2 = "passwords must be the same";
  }

  let gender = false;
  this.querySelectorAll(".genderinput").forEach((el) => {
    if (el.checked) {
      gender = true;
    }
  });
  if (!gender) {
    errors.gender = "select your gender";
  }

  let agree = document.getElementById("check").checked;

  if (!agree) {
    errors.agree = "you must agree terms and conditions";
  }

  this.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });

  for (let index in errors) {
    let errorElement = document.getElementById("error-" + index);
    if (errorElement) {
      errorElement.innerText = errors[index];
    }
  }
  if (Object.keys(errors).length === 0) {
    // this.submit();
    let click = document.getElementById("btn");
    click.addEventListener("click", function () {
      alert("you can not register at this moment");
    });
  }
});

//!show hide password

let password = document.getElementById("passwordfield");
let hideIcon = document.getElementById("icon");

hideIcon.addEventListener("click", hideClick);

function hideClick() {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    hideIcon.classList.remove("fa-eye");
    hideIcon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    hideIcon.classList.remove("fa-eye-slash");
    hideIcon.classList.add("fa-eye");
  }
}

let password2 = document.getElementById("passwordfield2");
let hideIcon2 = document.getElementById("icon2");

hideIcon2.addEventListener("click", hideClick2);

function hideClick2() {
  if (password2.type == "password") {
    password2.setAttribute("type", "text");
    hideIcon2.classList.remove("fa-eye");
    hideIcon2.classList.add("fa-eye-slash");
  } else {
    password2.setAttribute("type", "password");
    hideIcon2.classList.remove("fa-eye-slash");
    hideIcon2.classList.add("fa-eye");
  }
}

// ! Username Contains Letters With Numbers, Only Numbers or Only Letters are Not Allowed

let User = document.getElementById("usernamefield");

User.addEventListener("keyup", functions);

function functions() {
  let usernamepattern = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
  let username = document.getElementById("usernamefield").value;
  let errorUser = document.getElementById("error-username");

  if (username.match(usernamepattern)) {
    errorUser.textContent = "your username is valid";
    errorUser.style.color = "green";
  } else {
    errorUser.textContent = "your username is Invalid";
    errorUser.style.color = "red";
  }

  if (username === "") {
    errorUser.innerHTML = "";
  }
}



password.addEventListener("keyup", number1);

function number1() {
  let passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  let Mainpassw = Document.getElementById("passwordfield").value;
  let errorpassw = document.getElementById("error-passw");

  if (Mainpassw.match(passwordPattern)) {
    errorpassw.innerText = "your password is valid";
    errorpassw.style.color = "green";
  } else {
    errorpassw.innerText = "your password is Invalid";
    errorpassw.style.color = "red";
  }

  if (Mainpassw === "") {
    errorpassw.innerHTML = "";
  }
}

