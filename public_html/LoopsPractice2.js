/* 
 * Ask the user to enter 5 numbers.
 * Keep a running total.
 * Display the final total.
 */

document.write("This program asks the user for 5 numbers and prints their total.");
let counter = 1;
let sum = 0;
let userNumber = 0;
while (counter <= 5) {
    userNumber = Number(prompt("Enter number " + counter + ": "));
    sum = sum + userNumber;
    counter = counter + 1;
}
document.write("<br>The sum is " + sum);

