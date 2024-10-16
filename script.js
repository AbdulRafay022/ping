"use strict";
// Elements
const form = document.querySelector("form");
const email = document.querySelector(".email-input");

//Error
const errorText = document.querySelector(".error-text");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Email Pattern
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailValue = email.value;
  if (emailPattern.test(email.value)) {
    alert(`
      Message sent!
      
      Thanks for completing the form we'll be in touch soon
  
      Emial : ${emailValue}
      `);
    window.location.reload();
  } else {
    email.classList.add("error-active");
    errorText.classList.remove("hidden");
  }
});
