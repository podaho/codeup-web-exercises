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
    for(var i = 1; i < 10; i++) {
        retString = "";
        for(var j = 0; j < i; j++) {
            retString += i;
        }
        console.log(retString);
    }
}

function decreasingByFive() {
    for(var i = 0; i < 20; i ++) {
        console.log(100-(i*5));
    }
}