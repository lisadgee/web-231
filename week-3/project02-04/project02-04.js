/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Lisa Gee
      Date:  4/4/24

      Filename: project02-04.js
 */

//Declare constant variables
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;

 //Add event handler that runs calcTotal function when each element is clicked
document.getElementById("chicken").addEventListener("click",calcTotal);
document.getElementById("halibut").addEventListener("click",calcTotal);
document.getElementById("burger").addEventListener("click",calcTotal);
document.getElementById("salmon").addEventListener("click",calcTotal);
document.getElementById("salad").addEventListener("click",calcTotal);

//Set variables when each element is checked
 function calcTotal () {
   let cost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   /*Increase value of the cost by the value
   of whichever element is checked or by 0 if otherwise....
   */
  cost += buyChicken ? CHICKEN_PRICE : 0;
  cost += buyHalibut ? HALIBUT_PRICE : 0;
  cost += buyBurger ? BURGER_PRICE : 0;
  cost += buySalmon ? SALMON_PRICE : 0;
  cost += buySalad ? SALAD_PRICE : 0;

  //Declare tax variable
  let tax = cost * SALES_TAX;

  //Declare totalCost variable, setting value to cost plus tax
  let totalCost = cost + tax;

  /*Set the innerHTMl property for element with id "foodTotal" to value returned by 
  formatCurrency () function  using cost as parameter */
  document.getElementById ("foodTotal").innerHTML = formatCurrency(cost);

   /*Set the innerHTMl property for element with id "foodTax" to value returned by 
  formatCurrency () function  using tax as parameter */
  document.getElementById ("foodTax").innerHTML = formatCurrency(tax);

   /*Set the innerHTMl property for element with id "totalBill" to value returned by 
  formatCurrency () function  using totalBill as parameter */
  document.getElementById ("totalBill").innerHTML = formatCurrency(totalCost);

}


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
