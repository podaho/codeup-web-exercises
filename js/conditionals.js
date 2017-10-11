"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enterNumberBoolean = confirm('Would you like to enter a number?');

function numberAnalysis() {
    if(enterNumberBoolean) {
        var numInput = prompt('Enter Number:');
        if(isNaN(numInput)) {
            alert("Not a number, fool!");
            numberAnalysis();
        } else {
            if(parseInt(numInput)%2===1) {
                alert("Your number is odd");
            } else {
                alert("Your number is even");
            }
            alert("Your number plus 100 is "+(parseInt(numInput)+100));
            if(parseInt(numInput)<0) {
                alert("Your number is negative");
            } else {
                alert("Your number is positive");
            }
        }
    }
    return 0;
}

numberAnalysis();

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(str) {
    if(str === 'blue') {
        return "blue is the color of the sky";
    } else if(str === 'red') {
        return "Strawberries are red";
    } else if(str === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "I don't even know what you're talking about....";
    }
}

function analyzeColorTester(colors) {
    colors.forEach(function(element) {
        console.log("Color input is "+element+", output from analyzeColor is "+analyzeColor(element));
    });
}



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

analyzeColorTester(colors);

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(str) {
    switch(str) {
        case 'blue':
            return "blue is the color of the sky";
            break;
        case 'red':
            return "Strawberries are red";
            break;
        case 'cyan':
            return "I don't know anything about cyan";
            break;
        default:
            return "I don't even know what you're talking about....";
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColorInput = prompt("Enter your color:");
alert(analyzeColor(userColorInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `caculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(randomNumber, total) {
    var retval;
    switch(parseInt(randomNumber)) {
        case 0:
            return total;
            break;
        case 1:
            retval = parseInt(total)*.90;
            return retval;
            break;
        case 2:
            retval = parseInt(total)*.75;
            return retval;
            break;
        case 3:
            retval = parseInt(total)*.65;
            return retval;
            break;
        case 4:
            retval = parseInt(total)*.5;
            return retval;
            break;
        case 5:
            return 0;
            break;
        default:
            return "That's not a discount code, bruh. Get outta here!";
            break;
    }
}

function calculateTotalTester() {
    if(!(calculateTotal(0,100)===100)) {
        return "error: failed test at random number 0";
    } else if(!(calculateTotal(1,100)===90)) {
        return "error: failed test at random number 1";
    } else if(!(calculateTotal(2,100)===75)) {
        return "error: failed test at random number 2";
    } else if(!(calculateTotal(3,100)===65)) {
        return "error: failed test at random number 3";
    } else if(!(calculateTotal(4,100)===50)) {
        return "error: failed test at random number 4";
    } else if(!(calculateTotal(5,100)===0)) {
        return "error: failed test at random number 5";
    }
    return "Tests passed for calculateTotal()";
}

console.log(calculateTotalTester());

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalInput = prompt("What's your bill total?");
alert("Your lucky number is "+luckyNumber+" which leads your bill to be $"+calculateTotal(luckyNumber, totalInput).toFixed()+".");
