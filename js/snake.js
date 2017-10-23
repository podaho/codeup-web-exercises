var direction = 2;
var interval = 100;
var snakeArr = [[50,25],[50,26],[50,27],[50,28],[50,29]];
var dead = false;
var score = 0;

var gameDiv = document.getElementById("game");
var scoreDiv = document.getElementById("score");

for(var i = 1; i <= 50; i++) {
    for(var j = 1; j <= 100; j++) {
        var id = "x"+j+"y"+i;
        var newElem = document.createElement("div");
        newElem.setAttribute("id",id);
        if(i === 1 || j === 1 || i === 50 || j === 100) {
            newElem.setAttribute("class","grid border");
            newElem.setAttribute("border", "border");
        } else {
            newElem.setAttribute("class","grid");
        }
        gameDiv.appendChild(newElem);
    }
}

genFruit();

function displaySnake() {
    snakeArr.forEach(function (elem, index, array) {
        var div = document.getElementById("x" + elem[0] + "y" + elem[1]);
        //console.log(div);
        div.setAttribute("style", "background-color: black");
        div.setAttribute("snake", "body");
    });
}

function move(dir) {
    switch(dir) {
        case 1:
            var newSegment = [snakeArr[0][0],snakeArr[0][1]-1]
            break;
        case 2:
            var newSegment = [snakeArr[0][0]+1,snakeArr[0][1]]
            break;
        case 3:
            var newSegment = [snakeArr[0][0],snakeArr[0][1]+1]
            break;
        case 4:
            var newSegment = [snakeArr[0][0]-1,snakeArr[0][1]]
            break;
    }
    if(document.getElementById("x"+newSegment[0]+"y"+newSegment[1]).hasAttribute("snake") || document.getElementById("x"+newSegment[0]+"y"+newSegment[1]).hasAttribute("border")) {
        dead = true;
    } else {
        snakeArr.unshift(newSegment);
    }
    if(!(document.getElementById("x"+newSegment[0]+"y"+newSegment[1]).hasAttribute("fruit"))) {
        var div = document.getElementById("x"+snakeArr[snakeArr.length-1][0]+"y"+snakeArr[snakeArr.length-1][1]);
        div.removeAttribute("style");
        div.removeAttribute("snake");
        snakeArr.pop();
    } else {
        var div = document.getElementById("x"+newSegment[0]+"y"+newSegment[1]);
        div.removeAttribute("fruit");
        score += 5;
        genFruit();
    }
    displaySnake();
}

var setIntervalId = setInterval(function() {
    if(dead) {
        clearInterval(setIntervalId);
        alert("Game Over!\nYour Final Score: "+score);
    } else {
        move(direction);
        scoreDiv.innerHTML = "Your Score: "+score+" Pts";
    }
},interval);

function handleKeys(e) {
    var keys = e.key;
    switch(keys) {
        case "ArrowUp":
            if(direction !== 3) {
                direction = 1;
            }
            break;
        case "ArrowDown":
            if(direction !== 1) {
                direction = 3;
            }
            break;
        case "ArrowLeft":
            if(direction !== 2) {
                direction = 4;
            }
            break;
        case "ArrowRight":
            if(direction !== 4) {
                direction = 2;
            }
            break;
        default:
            break;
    }
}

function genFruit() {
    var x = Math.floor(Math.random()*98)+2;
    var y = Math.floor(Math.random()*48)+2;
    var div = document.getElementById("x" + x + "y" + y);
    console.log("FRUIT x: "+x+", y: "+y);
    //console.log(div);
    div.setAttribute("style", "background-color: red");
    div.setAttribute("fruit", "yum");
}

function reset() {
    if(setIntervalId) {
        clearInterval(setIntervalId);
    }
    snakeArr.forEach(function (elem, index, array) {
        var div = document.getElementById("x" + elem[0] + "y" + elem[1]);
        //console.log(div);
        div.removeAttribute("style");
        div.removeAttribute("snake");
    });
    direction = 2;
    interval = 100;
    snakeArr = [[50,25],[50,26],[50,27],[50,28],[50,29]];
    dead = false;
    score = 0;
    console.log(interval);
    setIntervalId = setInterval(function() {
        if(dead) {
            clearInterval(setIntervalId);
            alert("Game Over!\nYour Final Score: "+score);
        } else {
            move(direction);
            scoreDiv.innerHTML = "Your Score: "+score+" Pts";
        }
    },interval);
}

window.addEventListener("keydown", handleKeys, false);
document.getElementById("reset").addEventListener("click", reset, false);
