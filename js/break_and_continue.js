function printOddWithSkip() {
    var input;
    do {
        input = prompt("Enter an odd number from 1 to 50:");
        if(!input || !(input % 2 === 1) || !(input >= 1) || !(input <= 50)) {
            console.log(input+" is an invalid input, sorry.");
        } else {
            break;
        }
    } while(true);

    var currNum = 1;
    while(currNum < 50) {
        if(currNum == input) {
            console.log("Yikes! Skipping number "+input);
        } else {
            console.log("Here's an odd number: "+currNum);
        }
        currNum += 2;
    }
}