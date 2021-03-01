"use strict";
// Variables
const home = document.getElementById("homepage");
const signup = document.getElementById("signup");
const emailSignupBtn = document.getElementById("homepage-signup-email");

// Event Listeners
emailSignupBtn.addEventListener("click", function (e) {
  e.preventDefault();

  home.style.display = "none";
  signup.style.display = "";
});

// Functions:
function init() {
  signup.style.display = "none";
}

init();
