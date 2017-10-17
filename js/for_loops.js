function showMultiplicationTable(num) {
    for(var i = 1; i < 11; i++) {
        console.log(num+" x "+i+" = "+(parseInt(num)*i));
    }
}

function genTenRandos() {
    /*var rando = Math.floor(Math.random()*180)+21;
    var count = 0;
    do {
        if(rando % 2 === 0) {
            console.log(rando+" is even");
        } else {
            console.log(rando+" is odd");
        }
        rando = Math.floor(Math.random()*180)+21;
        count += 1;
    } while(count < 10);*/
    for(var i = 0; i < 10; i++) {
        rando = Math.floor(Math.random()*180)+21;
        if(rando % 2 === 0) {
            console.log(rando+" is even");
        } else {
            console.log(rando+" is odd");
        }
    }
}

function cascadeNums() {
    var retString = "";
    for(var i = 1; i <= 10; i++) {
        retString = "";
        for(var j = 0; j < i; j++) {
            if(i === 10) {
                retString += 0;
            } else {
                retString += i;
            }
        }
        console.log(retString);
    }
}

function decreasingByFive() {
    for(var i = 0; i < 20; i ++) {
        console.log(100-(i*5));
    }
}

function diamond(input) {
    if(input % 2 === 1) {
        var i = 1;
    } else {
        var i = 2;
    }
    var holder = [];
    var outStr = "";
    while(i <= input) {
        if(i < input) {
            outStr += " ".repeat((input-i)/2);
            outStr += "*".repeat(i);
            outStr += " ".repeat((input-i)/2);
            holder.push(outStr);
        } else {
            outStr += "*".repeat(i);
        }
        console.log(outStr);
        outStr = "";
        i += 2;
    }
    while(holder.length > 0) {
        console.log(holder.pop());
    }
}

function multTable(n) {
    var numSpaces = (n*n).toString().length;
    for(var i = 1; i <= n; i++) {
        var outStr = "";
        for(var j = 1; j <= n; j++) {
            var tmp = (i*j).toString();
            tmp += " ".repeat(numSpaces-tmp.length+1);
            outStr += tmp;
        }
        console.log(outStr);
    }
}

function fizzBuzz() {
    for(var i = 1; i < 101; i++) {
        var retStr = "";
        if(i % 3 === 0 && i % 5 === 0) {
            retStr = "FizzBuzz";
        } else if(i % 3 === 0) {
            retStr = "Fizz";
        } else if(i % 5 === 0) {
            retStr = "Buzz";
        } else {
            retStr += i;
        }
        console.log(retStr);
    }
}

