/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Lisa Gee
      Date:   3/27/24

      Filename: project02-02.js
 */
 function verifyForm () {
    //Declare the variables equal to the value in the fields below
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    /*Test condition for data in email and phone fields
      If condition is true, "Thank you"
      If condition is false, "fill in fields"
    */
   (email !== "") && (phone !=="") ? 
    window.alert("Thank you!"):
    window.alert("Please fill in fields");
 }
 
 // Run verifyForm function when user clicks submit button
    document.getElementById("submit").onclick = verifyForm;
