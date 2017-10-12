function binaryPowers() {
    var i = 0;
    var ret = 1;
    while(i < 16) {
        ret *= 2;
        i += 1;
        console.log(ret);
    }
}

function sellSumCones() {
    var numCones = Math.floor(Math.random() * 50) + 50;
    console.log("I have "+numCones+" to sell today.")
    var sold;
    do {
        sold = Math.floor(Math.random() * 5) + 1;
        if(numCones > sold) {
            console.log(sold+" cones sold...");
            numCones -= sold;
        } else if(numCones == sold) {
            console.log(sold+" cones sold... Aaaaand I'm out of cones!!!");
            numCones -= sold;
        } else {
            console.log("Can't sell you "+sold+" cones, I only have "+numCones);
        }
        console.log(numCones+" cones left...")
    } while(numCones > 0)
}