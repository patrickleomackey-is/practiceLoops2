/* 
 * Ask the user to enter 5 numbers.
 * Keep a running total.
 * Display the final total.
 */

document.write("This program asks the user for 5 numbers and prints their total.");
let counter = 1;
let total = 0;
let userNumber = 0;
while (counter<=5){
    userNumber = Number(prompt("Enter an integer: "));
    total = total + userNumber;
    counter++;//counter = counter + 1
    
    
}
document.write("<br> Your total is   "+ total + " !");
