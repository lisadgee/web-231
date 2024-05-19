"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Lisa Gee
      Date:   5/16/24

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
  
   let regex1 = /[A-Z]/;  //only uppercase
   let regex2 = /\d/;  //numbers only
   let regex3 = /[!\$#%]/; //only these characters
   
   e.preventDefault();  //prevent browser from responding to submit event

   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters.";
   }
    else if (regex1.test(pwd) === false) {  //test method of object regex1 returns false....
      feedback.textContent = "Your password must include an uppercase letter.";
   }
    else if (regex2.test(pwd) === false) {  //test method of object regex2 returns false....
      feedback.textContent = "Your password must include a number.";
   }
    else if (regex3.test(pwd) === false) {  //test method of object regex3 returns false....
      feedback.textContent = "Your password must include one of the following: !$#%.";
}
    else {
    signupForm.submit();  //apply submit method to form
}}
);