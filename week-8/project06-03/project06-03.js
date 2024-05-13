"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Lisa Gee
      Date:  5/11/24 

      Filename: project06-03.js
*/

// declare useShip variable to ref element with id "useShip"
let useShip = document.getElementById("useShip");
//Add event listener to useShip to run copyShippingToBilling function when clicked
useShip.addEventListener("click", copyShippingToBilling);


//copyShippingToBilling function
//check if useShip is checked
function copyShippingToBilling() {
  let firstnameBill = document.getElementById("firstnameBill");
  let firstnameShip = document.getElementById("firstnameShip");

  let lastnameBill = document.getElementById("lastnameBill");
  let lastnameShip = document.getElementById("lastnameShip");

  let address1Bill = document.getElementById("address1Bill");
  let address1Ship = document.getElementById("address1Ship");

  let address2Bill = document.getElementById("address2Bill");
  let address2Ship = document.getElementById("address2Ship");

  let cityBill = document.getElementById("cityBill");
  let cityShip = document.getElementById("cityShip");

  let countryBill = document.getElementById("countryBill");
  let countryShip = document.getElementById("countryShip");

  let codeBill = document.getElementById("codeBill");
  let codeShip = document.getElementById("codeShip");

  if (useShip.checked === true) {
    firstnameBill.value = firstnameShip.value;
    lastnameBill.value = lastnameShip.value;
    address1Bill.value = address1Ship.value;
    cityBill.value = cityShip.value;
    countryBill.value = countryShip.value;
    codeBill.value = codeShip.value;

    /*Set the selectedIndex property of the stateBill field to the 
    value of the selectedIndex property of the stateShip field*/
    let stateIndex = state.selectedIndex;
    let stateValue = state.options[stateIndex].value;
    
  }

}

//Declare formElements variable 
//Declare the fieldCount variable with a value equal to the length of the formElements note list.
//Declare the errorBox referencing the element with the id "errorBox"
let formElements = document.querySelectorAll("input [type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

/*For loop that iterates through each element in the formElements note list
  and for each element apply an event listener that calls the showValidationError()
  function in response to the invalid event
*/
for (let i = 0; i < formElements.elements.length; i++) {   
  formElements.elements[i].addEventListener('invalid', showValidationError); {
    
  }
}

//Override browser validation message
function showValidationError() {
  // formElements.noValidate = true;  Why doesn't this line work?
  formElements.addEventListener("invalid", function(evt) {
  evt.preventDefault ();
    errorBox.textContent = "Complete all highlighted fields";

   });
 }
