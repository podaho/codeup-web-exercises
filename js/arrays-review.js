"use strict";

var myArray = [1, 2, 3, 4, 5];
var answerField;
//What is the element at index 0?
answerField = document.getElementById("ans1");
answerField.innerHTML = "myArray[0] -> "+myArray[0];

//What is the index of the element 3?
answerField = document.getElementById("ans2");
answerField.innerHTML = "myArray.indexOf(3) -> "+myArray.indexOf(3);

//What is the length of the array i.e. how many elements are in the array?
answerField = document.getElementById("ans3");
answerField.innerHTML = "myArray.length -> "+myArray.length;

//What is the index of the last element in the array? How does this number relate to the length of the array?
answerField = document.getElementById("ans4");
answerField.innerHTML = "myArray.indexOf(5) -> "+myArray.indexOf(5)+"; myArray.length-1 -> "+(myArray.length-1);

//Write a for loop that console logs each element in the array. Refactor your code to use a foreach loop. How are they different?
answerField = document.getElementById("ans5");
answerField.innerHTML = "for(var i = 0; i < myArray.length; i++) {\n    console.log(myArray[i]);\n}";

var myArray = [2, 3, 4];
myArray.pop();
myArray.unshift(1);
console.log(myArray);

// What will the code output?
answerField = document.getElementById("ans6");
answerField.innerHTML = "myArray -> "+myArray;

// What is the length of myArray?
answerField = document.getElementById("ans7");
answerField.innerHTML = "myArray.length -> "+myArray.length;

// What will myArray.indexOf(2) return?
answerField = document.getElementById("ans8");
answerField.innerHTML = "myArray.indexOf(2) -> "+myArray.indexOf(2);

// What will myArray.indexOf('2') return?
answerField = document.getElementById("ans9");
answerField.innerHTML = "myArray.indexOf('2') -> "+myArray.indexOf('2');

// Using split and join to complete the following:
var myPhoneNumber = '210.867.5309';
// TODO: convert myPhoneNumber to an array that contains the area code, the first three digits and the last four numbers in the phone number
// TODO: convert the array back to a string the contains the phone number with the groups of numbers separated by dashes
// console log throughout to check your work
var myPhoneNumberSplit = myPhoneNumber.split('.');
var myPhoneNumberDashed = myPhoneNumberSplit.join('-');
answerField = document.getElementById("ans10");
answerField.innerHTML = "var myPhoneNumberSplit = myPhoneNumber.split('.');        //\["+myPhoneNumberSplit+"\]\nvar myPhoneNumberDashed = myPhoneNumberSplit.join('-');   //"+myPhoneNumberDashed;