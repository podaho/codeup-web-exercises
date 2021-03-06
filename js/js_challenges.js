// Write a function that accepts an array whose elements are arrays of numbers. The function should return the original array, but in the place of each element, the sum of the numbers from the inner array.
// sumEmUp([[1], [1, 2, 3], [5, 5, 5], [1, 1, 1, 1, 1]]) // returns [1, 6, 15, 5]

function sumArraysArray(arr) {
    var retval = [];
    for(var i = 0; i < arr.length; i++) {
        var sum = 0;
        for(var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
        retval.push(sum);
    }
    return retval;
}

/* test code
var arrForTest = [];
var tmp = [];
for(var i = 1; i < 101; i++) {
    tmp.push(i);
    if(i % 10 === 0) {
        arrForTest.push(tmp);
        tmp = [];
    }
}
arrForTest.forEach(function(elem) {
    console.log(elem);
});

console.log(sumArraysArray(arrForTest));
*/

// Write a function that converts 12 to 24 hour time, and one that does the inverse
//'
function twelveToTwentyFour(time) {
    if(time.length === 5) {
        //24
        var timeArr = time.split(':');
        var hour = parseInt(timeArr[0]);
        var ampm;
        var retval;
        if(hour >= 12) {
            if(hour > 12) {
                hour -= 12;
            }
            ampm = "pm";
        } else if(hour == 0) {
            ampm = "am";
            hour = 12;
        } else {
            ampm = "am";
        }
        timeArr[0] = hour.toString();
        timeArr[2] = timeArr[1];
        timeArr[1] = ':';
        timeArr[3] = ampm;
        retval = timeArr.join('');
    } else {
        //12
        var ampm = time.slice(time.length-2);
        var timeArr = time.slice(0,time.length-2).split(':');
        var hour = parseInt(timeArr[0]);
        var minute = timeArr[1];
        if(ampm === "pm" && hour != 12) {
            hour += 12;
        } else if(ampm === "am" && hour === 12) {
            hour = "00";
        }
        var retval = hour+':'+minute;
    }
    return retval;
}
console.log(twelveToTwentyFour('1:00pm')); // returns '13:00'
console.log(twelveToTwentyFour('9:00pm')); // returns '21:00'
console.log(twelveToTwentyFour('9:00am')); // returns '09:00'
console.log(twelveToTwentyFour('12:00pm')); // returns '12:00'
console.log(twelveToTwentyFour('12:00am')); // returns '00:00'

console.log(twelveToTwentyFour('13:00')); // returns '1:00pm'
console.log(twelveToTwentyFour('06:30')); // returns '6:30am'
console.log(twelveToTwentyFour('23:00')); // returns '11:00pm'
console.log(twelveToTwentyFour('12:00')); // returns '12:00pm'
console.log(twelveToTwentyFour('00:45')); // returns '12:45am


// Write a split function. You can call .split on a string, but the point of this challenge is to implement it yourself. You function should accept a string and a delimeter, and return an array.
//
// split('1-2-3-4-5', '-') // returns [1, 2, 3, 4, 5]
function splitFunc(str, del) {
    var retArr = [];
    var holder = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] === del) {
            retArr.push(holder);
            holder = "";
        } else {
            holder += str[i];
        }
        if(i === str.length-1) {
            retArr.push(holder);
            holder = "";
        }
    }
    return retArr;
}

// Write a function named parseDate. It should accept a string that is a date, and return a more human-friendly representation.
//
function parseDate(str) {
    var dateArr = str.split('-');
    var year = dateArr[0];
    var month = parseInt(dateArr[1]);
    var date = dateArr[2];
    switch(month) {
        case 1:
            month = 'January';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
    }
    return month+" "+date+", "+year;
}
console.log(parseDate('2017-10-19')); // returns "October 19, 2017"
console.log(parseDate('2017-12-25')); // returns "December 25, 2017"

// Write a function that accepts an array whose elements are arrays where each inner array consists of two numbers. The function should return the index of the element whose two inner numbers add up to 9, or -1 if no pairs add up to 9.
function findIndexWhereSumIs9(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i][0]+arr[i][1]===9) {
            return i;
        }
    }
    return -1;
}
console.log(findIndexWhereSumIs9([[1, 2], [3, 4], [4, 5], [9, 1]]))    // returns 2
console.log(findIndexWhereSumIs9([[10, 2], [11, -2], [2, 5], [9, 1]])) // returns 1
console.log(findIndexWhereSumIs9([[10, 2], [11, -7], [2, 5], [9, 1]])) // returns -1


// Create a function that simulates rolling dice named roll. Your function should allow the caller to indicate how many dice to roll, as well as how many sides each dice has. This information will be passed as a string, which you will need to parse, and your function should return the sum of all the dice rolls.
//
// An n sided dice is notated as a dn where n is the number of sides the dice has. For example, a d6 has six sides (and contains the numbers 1 through 6), and a d12 has 12 sides (and contains the numbers 1 through 12). "Rolling" a dice can be modeled as choosing a random number in the range of the sides of the dice.
//
// Multiple dice rolls are notated as prefixing the dice description with an integer. For example, 3d4 means 3 4-sided dice, and 10d6 means 10 6-sided dice.
//
// > roll('10d6')
// 42
// > roll('10d6')
// 37
// So roll('10d6') will roll 10 six sided dice (generate 10 random numbers between 1 and 6), and return the sum of those rolls.

function roll(input) {
    var argArr = input.toLowerCase().split('d');
    var random;
    var sum = 0;
    for(var i = 0; i < parseInt(argArr[0]); i++) {
        random = Math.floor(Math.random()*parseInt(argArr[1]))+1;
        console.log("Dice #"+(i+1)+" rolled a "+random);
        sum += random;
    }
    console.log("The total after "+argArr[0]+" "+argArr[1]+" sided die is "+sum);
    return sum;
}

// Bonus bonus
//
// Have your roll function return an array where the first element is the sum of the rolled dice, and the second element is an array that contains each individual roll.
//
// > roll('10d6')
//     [ 42, [ 3, 5, 3, 5, 5, 1, 6, 3, 6, 5 ] ]
// > roll('10d6')
//     [ 37, [ 4, 6, 5, 5, 2, 6, 3, 3, 1, 2 ] ]

function rollArr(input) {
    var argArr = input.toLowerCase().split('d');
    var random;
    var nums = [];
    var sum = 0;
    for(var i = 0; i < parseInt(argArr[0]); i++) {
        random = Math.floor(Math.random()*parseInt(argArr[1]))+1;
        console.log("Dice #"+(i+1)+" rolled a "+random);
        nums.push(random);
        sum += random;
    }
    console.log("The total after "+argArr[0]+" "+argArr[1]+" sided die is "+sum);
    return [sum, nums];
}

// Extra bonus array exercises:
//
// BONUS 1:
// Write a program to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//
// Example input: “aBc12#”
// Example output: “AbC12#”

function changeCase(str) {
    var retval = "";
    for(var i = 0; i < str.length; i++) {
        if(str[i] === str[i].toUpperCase()) {
            retval += str[i].toLowerCase();
        } else {
            retval += str[i].toUpperCase();
        }
    }
    console.log(retval);
    return retval;
}


// BONUS 2:
//
// Write a program that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output “Yes”. if the number appended does not equal the string length, output “No”.
//
// Example Input: “geek5”
// Example Output: “Yes”
//
// Example Input: “codingchallenge25”
// Example Output: “No”

function checkStrNum(str) {
    var len = (str.length).toString();
    if(str.slice(str.length-parseInt(len.length)) === len) {
        console.log("Yes");
        return "Yes";
    }
    console.log("No");
    return "No";
}