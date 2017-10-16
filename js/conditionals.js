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


//================================= CONDITIONALS BONUSES

// Bonus 1
//
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// - Catch any invalid inputs.
// - Write the logic using if/else ifs and then refactor using a switch case
//
function favDay() {
    var input = prompt("What's your favorite day of the week?");
    /*if(input === "Monday" || input === "monday") {
        console.log("Nobody likes Mondays, weirdo...");
    } else if(input === "Tuesday" || input === "tuesday") {
        console.log("Tuesdays are better tipsy.");
    } else if(input === "Wednesday" || input === "wednesday") {
        console.log("You like the hump? I mean I guess...");
    } else if(input === "Thursday" || input === "thursday") {
        console.log("THIRSTY THURSDAY!!!!");
    } else if(input === "Friday" || input === "friday") {
        console.log("It's Fri-Yay!");
    } else if(input === "Saturday" || input === "saturday") {
        console.log("Another day of the weekend, who doesn't like Saturdays");
    } else if(input === "Sunday" || input === "sunday") {
        console.log("You either go to church, or you go to brunch, or both.");
    } else {
        console.log("I didn't know that "+input+" was a day of the week...");
    }*/
    switch(input) {
        case "Monday":
        case "monday":
            console.log("Nobody likes Mondays, weirdo...");
            break;
        case "Tuesday":
        case "tuesday":
            console.log("Tuesdays are better tipsy.");
            break;
        case "Wednesday":
        case "wednesday":
            console.log("You like the hump? I mean I guess...");
            break;
        case "Thursday":
        case "thursday":
            console.log("THIRSTY THURSDAY!!!!");
            break;
        case "Friday":
        case "friday":
            console.log("It's Fri-Yay!");
            break;
        case "Saturday":
        case "saturday":
            console.log("Another day of the weekend, who doesn't like Saturdays");
            break;
        case "Sunday":
        case "sunday":
            console.log("You either go to church, or you go to brunch, or both.");
            break;
        default:
            console.log("I didn't know that "+input+" was a day of the week...");
            break;
    }
}

// Bonus 2
//
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
// - refactor to use a ternary operator
//

function isAN() {
    var input = prompt("Give me a number:");
    /*if(!isNaN(input)) {
        alert("Yep, that's a number!");
    } else {
        alert("Nope, not a number!");
    }*/
    (!isNaN(input)) ? alert("Yep, that's a number!") : alert("Nope, not a number!");
}

// Bonus 3
//
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months

function describeAMonth() {
    var input = prompt("Select a season: Spring, Summer, Fall (or Autumn), Winter");
    switch(input.toLowerCase()) {
        case "spring":
            var input2 = prompt("Select a month in Spring: March, April, or May");
            switch(input2.toLowerCase()) {
                case "march":
                case "mar":
                case "mar.":
                    alert("Third month of the year...");
                    break;
                case "april":
                case "apr":
                case "apr.":
                    alert("Fourth month of the year...");
                    break;
                case "may":
                    alert("Fifth month of the year...");
                    break;
                default:
                    alert("That's not a month in Spring, stupid!");
                    break;
            }
            break;
        case "summer":
            var input2 = prompt("Select a month in Summer: June, July, or August");
            switch(input2.toLowerCase()) {
                case "june":
                case "jun":
                case "jun.":
                    alert("Sixth month of the year...");
                    break;
                case "july":
                case "jul":
                case "jul.":
                    alert("Seventh month of the year...");
                    break;
                case "august":
                case "aug":
                case "aug.":
                    alert("Eighth month of the year...");
                    break;
                default:
                    alert("That's not a month in Summer, stupid!");
                    break;
            }
            break;
        case "fall":
        case "autumn":
            var input2 = prompt("Select a month in Fall: September, October, or November");
            switch(input2.toLowerCase()) {
                case "september":
                case "sep":
                case "sept":
                case "sep.":
                case "sept.":
                    alert("Ninth month of the year...");
                    break;
                case "october":
                case "oct":
                case "oct.":
                    alert("Tenth month of the year...");
                    break;
                case "november":
                case "nov":
                case "nov.":
                    alert("Eleventh month of the year...");
                    break;
                default:
                    alert("That's not a month in Fall, stupid!");
                    break;
            }
            break;
        case "winter":
            var input2 = prompt("Select a month in Winter: December, January, or February");
            switch(input2.toLowerCase()) {
                case "december":
                case "dec":
                case "dec.":
                    alert("Twelfth month of the year...");
                    break;
                case "january":
                case "jan":
                case "jan.":
                    alert("First month of the year...");
                    break;
                case "february":
                case "feb":
                case "feb.":
                    alert("Second month of the year...");
                    break;
                default:
                    alert("That's not a month in Winter, stupid!");
                    break;
            }
            break;
        default:
            alert(input+" is not a season...");
            break;
    }
}

// GOLD STAR BONUS
//
// Create a distance unit conversion application.
//     Prompt the user for a unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversion combinations,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units

function unitConversion() {
    var inputUnit = prompt("What unit of measurement would you like to convert?");
    var inputValue = prompt("Enter value in "+inputUnit.trim());
    var outputUnit = prompt("What unit of measurement would you like to convert to?");

    var inputInMeters;

    switch(inputUnit.toLowerCase()) {
        case "inches":
        case "\"":
        case "in":
        case "in.":
            inputInMeters = parseInt(inputValue)/39.3701;
            break;
        case "feet":
        case "'":
        case "ft":
        case "ft.":
            inputInMeters = parseInt(inputValue)/3.28084;
            break;
        case "miles":
        case "mi":
        case "mi.":
            inputInMeters = parseInt(inputValue)*1609.34;
            break;
        case "lightyears":
        case "light years":
        case "light-years":
        case "ly":
        case "ly.":
            inputInMeters = parseInt(inputValue)*9.461*Math.pow(10,15);
            break;
        case "meters":
        case "m":
        case "m.":
            inputInMeters = parseInt(inputValue);
            break;
        case "centimeters":
        case "cm":
        case "cm.":
            inputInMeters = parseInt(inputValue)/100;
            break;
        case "millimeters":
        case "mm":
        case "mm.":
            inputInMeters = parseInt(inputValue)/1000;
            break;
        case "kilometers":
        case "km":
        case "km.":
            inputInMeters = parseInt(inputValue)*1000;
            break;
        default:
            alert(inputUnit+" is not a valid unit for this conversion program!");
    }

    switch(outputUnit.toLowerCase()) {
        case "inches":
        case "\"":
        case "in":
        case "in.":
            return inputInMeters*39.3701;
            break;
        case "feet":
        case "'":
        case "ft":
        case "ft.":
            return inputInMeters*3.28084;
            break;
        case "miles":
        case "mi":
        case "mi.":
            return inputInMeters*0.000621371;
            break;
        case "lightyears":
        case "light years":
        case "light-years":
        case "ly":
        case "ly.":
            return inputInMeters/(9.461*Math.pow(10,15));
            break;
        case "meters":
        case "m":
        case "m.":
            return inputInMeters;
            break;
        case "centimeters":
        case "cm":
        case "cm.":
            return inputInMeters*100;
            break;
        case "millimeters":
        case "mm":
        case "mm.":
            return inputInMeters*1000;
            break;
        case "kilometers":
        case "km":
        case "km.":
            return inputInMeters/1000;
            break;
        default:
            alert(inputUnit+" is not a valid unit for this conversion program!");
            break;
    }
}