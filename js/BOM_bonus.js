//================================= BOM BONUSES
//    BONUS 1: Build a Jack-In-The-Box
//    Define an object called jackBox.
//        Include properties for...
//    triggered - whether or not the box has been sprung (should be false by default)
//    intervalId - set to null
//    play() - once called, if triggered is false, console.log one new element in the lyrics array every second
//    after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//        windUp() - once called will stop the play() method and set triggered to false
//    lyrics - an array with the following elements:

var jackBox = {
    triggered: false,
    intervalId: null,
    currLyricsIdx: 0,
    lyrics: [
        "All a-...",
        "-round the ...",
        "mulberry...",
        "bush, The...",
        "monkey...",
        "chased the...",
        "wea-...",
        "-sel...",
        "The monkey...",
        "stopped to...",
        "pull up his...",
        "sock,...",
        "Pop!...",
        "goes the...",
        "wea-...",
        "-sel."
    ],
    play: function() {
        if(!this.triggered) {
            this.intervalId = setInterval(function() {
                if(jackBox.currLyricsIdx < jackBox.lyrics.length) {
                    console.log(jackBox.lyrics[jackBox.currLyricsIdx]);
                    jackBox.currLyricsIdx += 1;
                } else {
                    jackBox.triggered = true;
                    clearInterval(jackBox.intervalId);
                    alert("POP!");
                }
            },100)
        } else {
            console.log("Jack is outta the box already!");
        }
    },
    windUp: function() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.triggered = false;
            this.currLyricsIdx = 0;
        }
    }
};

//    BONUS 2: Build a Stop Watch
//    Define an object called stopWatch.
//        Include the following properties...
//        intervalId
//    count
//    Include the following methods...
//    start() - starts console logging an increasing count every second
//    pause() - pauses counter
//    reset() - stops counter and resets count to zero

var stopWatch = {
    intervalId: null,
    count: 0,
    start: function() {
        //console.log("start");
        this.intervalId = setInterval(function() {
            var hr = "";
            var mn = "";
            var sc = "";
            stopWatch.count += 1;
            sc += Math.floor(stopWatch.count % 60);
            mn += Math.floor(stopWatch.count / 60);
            hr += Math.floor(stopWatch.count / 3600);
            if(sc.length < 2) {
                sc = "0" + sc;
            }
            if(mn.length < 2) {
                mn = "0" + mn;
            }
            if(hr.length < 2) {
                hr = "0" + hr;
            }
            document.getElementById("timer").innerHTML = hr+":"+mn+":"+sc;
        },1000)
    },
    stop: function() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
        }
    },
    reset: function() {
        this.intervalId = null;
        this.count = 0;
    }
}

document.getElementById("start").addEventListener('click',stopWatch.start);
document.getElementById("stop").addEventListener("click",stopWatch.stop);
document.getElementById("reset").addEventListener("click",stopWatch.reset);