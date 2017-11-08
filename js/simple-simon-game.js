$(document).ready(function() {
    var timeOutIdR;
    var timeOutIdY;
    var timeOutIdG;
    var timeOutIdB;
    var speed = 800;
    var keys = [];
    var ans = [];
    var lost = false;
    var playtime = false;
    var currentRound = 1;

    function getNum(str) {
        var retVal = "";
        for(var i = 0; i < str.length; i++) {
            if(str[i] === 'p') {
                return retVal;
            } else {
                retVal += str[i];
            }
        }
        retVal = parseInt(retVal);
        return retVal;
    }

    function clickRed() {
        console.log('red');
        if(!playtime) {
            $('#red').css('background-color', 'red');
            keys.push('red');
            if(timeOutIdR) {
                window.clearTimeout(timeOutIdR);
            }
            timeOutIdR = window.setTimeout(function() {
                $('#red').css('background-color', 'darkred');
            }, speed-100);
        } else {
            $('#red').css('background-color', 'red');
            ans.push('red');
            if(timeOutIdR) {
                window.clearTimeout(timeOutIdR);
            }
            timeOutIdR = window.setTimeout(function() {
                $('#red').css('background-color', 'darkred');
            }, speed-100);
            checkSequence();
        }
    }

    function clickYellow() {
        console.log('yellow');
        if(!playtime) {
            $('#yellow').css('background-color', 'yellow');
            keys.push('yellow');
            if(timeOutIdY) {
                window.clearTimeout(timeOutIdY);
            }
            timeOutIdY = window.setTimeout(function() {
                $('#yellow').css('background-color', 'darkgoldenrod');
            }, speed-100);
        } else {
            $('#yellow').css('background-color', 'yellow');
            ans.push('yellow');
            if(timeOutIdY) {
                window.clearTimeout(timeOutIdY);
            }
            timeOutIdY = window.setTimeout(function() {
                $('#yellow').css('background-color', 'darkgoldenrod');
            }, speed-100);
            checkSequence();
        }
    }

    function clickGreen() {
        console.log('green');
        if(!playtime) {
            $('#green').css('background-color', 'green');
            keys.push('green');
            if(timeOutIdG) {
                window.clearTimeout(timeOutIdG);
            }
            timeOutIdG = window.setTimeout(function() {
                $('#green').css('background-color', 'darkgreen');
            }, speed-100);
        } else {
            $('#green').css('background-color', 'green');
            ans.push('green');
            if(timeOutIdG) {
                window.clearTimeout(timeOutIdG);
            }
            timeOutIdG = window.setTimeout(function() {
                $('#green').css('background-color', 'darkgreen');
            }, speed-100);
            checkSequence();
        }
    }

    function clickBlue() {
        console.log('blue');
        if(!playtime) {
            $('#blue').css('background-color', 'blue');
            keys.push('blue');
            if(timeOutIdB) {
                window.clearTimeout(timeOutIdB);
            }
            timeOutIdB = window.setTimeout(function() {
                $('#blue').css('background-color', 'darkblue');
            }, speed-100);
        } else {
            $('#blue').css('background-color', 'blue');
            ans.push('blue');
            if(timeOutIdB) {
                window.clearTimeout(timeOutIdB);
            }
            timeOutIdB = window.setTimeout(function() {
                $('#blue').css('background-color', 'darkblue');
            }, speed-100);
            checkSequence();
        }
    }

    function genKeyPress() {
        var numToColors = [clickRed, clickYellow, clickGreen, clickBlue]
        var random = Math.floor(Math.random()*4);
        numToColors[random]();
    }

    function playRound(level) {
        console.log('playRound');
        if(speed > 150) {
            speed -= 50;
        }
        $('h3').html('Points: '+(currentRound-1));
        playtime = false;
        var i = 0;
        keys = [];
        var intervalId = window.setInterval(function() {
            if(i === 0) {
                console.log('delay 1 second');
                i += 1;
            } else if(i > 0 && i < (level+1)) {
                console.log('genKeyPress()');
                genKeyPress();
                i += 1;
            } else {
                console.log('clearInterval');
                window.clearInterval(intervalId);
                playtime = true;
            }
        }, speed+200);
    }

    function checkSequence() {
        console.log(keys);
        console.log(ans);
        for(var i = 0; i < ans.length; i++) {
            if(ans[i] != keys[i]) {
                alert('You Lost! You played '+currentRound+' games!');
                keys = [];
                ans = [];
                speed = 800;
                lost = true;
            }
        }
        if(!lost && ans.length === keys.length) {
            currentRound += 1;
            ans = [];
            playRound(currentRound);
        }
    }

    $('.quarter-circle').css('height', $('.quarter-circle').css('width'));
    $('#red').css('border-radius', $('.quarter-circle').css('width')+' 0 0 0');
    $('#yellow').css('border-radius', '0 ' + $('.quarter-circle').css('width') + ' 0 0');
    $('#blue').css('border-radius', '0 0 '+$('.quarter-circle').css('width')+' 0');
    $('#green').css('border-radius', '0 0 0 '+$('.quarter-circle').css('width'));
    $('#circle').css({
        'width': $('.quarter-circle').css('width'),
        'height': $('.quarter-circle').css('width'),
        'left': parseInt(getNum($('#red').css('margin-left')))+parseInt(getNum($('.quarter-circle').css('width')))*0.5+'px',
        'top': parseInt(getNum($('#red').css('margin-left')))+parseInt(getNum($('.quarter-circle').css('width')))*0.5+'px',
        'border-radius': parseInt($('.quarter-circle').css('width'))*0.5+'px',
        'line-height': parseInt($('.quarter-circle').css('width'))+1+'px',
    });

    $(window).resize(function() {
        $('.quarter-circle').css('height', $('.quarter-circle').css('width'));
        $('#red').css({
            'border-radius': $('.quarter-circle').css('width')+' 0 0 0',
        });
        $('#yellow').css({
            'border-radius': '0 ' + $('.quarter-circle').css('width') + ' 0 0',
        });
        $('#blue').css('border-radius', '0 0 '+$('.quarter-circle').css('width')+' 0');
        $('#green').css('border-radius', '0 0 0 '+$('.quarter-circle').css('width'));
        $('#circle').css({
            'width': $('.quarter-circle').css('width'),
            'height': $('.quarter-circle').css('width'),
            'left': parseInt(getNum($('#red').css('margin-left')))+parseInt(getNum($('.quarter-circle').css('width')))*0.5+'px',
            'top': parseInt(getNum($('#red').css('margin-left')))+parseInt(getNum($('.quarter-circle').css('width')))*0.5+'px',
            'border-radius': parseInt($('.quarter-circle').css('width'))*0.5+'px',
            'line-height': parseInt($('.quarter-circle').css('width'))+1+'px',
        });
    });

    $('#red').click(function() {
        if(playtime) {
            clickRed();
        }
    });

    $('#yellow').click(function() {
        if(playtime) {
            clickYellow();
        }
    });

    $('#green').click(function() {
        if(playtime) {
            clickGreen();
        }
    });

    $('#blue').click(function() {
        if(playtime) {
            clickBlue();
        }
    });

    $('#play').click(function() {
        console.log('play');
        lost = false;
        currentRound = 1;
        playRound(currentRound);
    });
});