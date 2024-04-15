/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Lisa Gee
      Date: 4/11/24  

      Filename: project03-01.js
			*/
// Declare variable
let menuItems = document.getElementsByClassName("menuItem");

//Loop thru collection of menu items and add eventlistener
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", calcTotal);
}
//calcTotal function
function calcTotal() {
	let orderTotal = 0;
	for (let i = 0; i < menuItems.length; i++) {
		if (menuItems[i].checked) {
			orderTotal += Number(menuItems[i].value);
		}
		
	}
	//Write to html
	document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
	return "$" + value.toFixed(2);
}