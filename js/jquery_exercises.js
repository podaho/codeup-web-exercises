"use strict";

/* //jQuery Introduction Exercise
$(document).ready(function() {
    alert("DOM ready for manipulation!");
});
*/

/* //jQuery Id Selectors Exercise
alert($('#first-paragraph').html());
alert($('#only-div').html());
var sameIdSelectors = $('#important').html(); //this will only show the first occurance of the id selector
console.log(sameIdSelectors);
*/

/* //jQuery Class Selectors Exercise
$('.codeup').css('border', '1px solid red'); //This only selects class names of 'codeup', IDs will not be selected even if the name is identical
*/

/* //jQuery Element/Multiple Selectors Exercise
$('li').first().css({
    'font-size': '40px',
    'font-weight': 'bolder'
});
$('h1, p, li').css('background-color','yellow');
alert($('li').html());
*/

$('h1').first().click(function(e) {
    $(e.target).css({
        'background-color': 'yellow'
    });
});
$('p').dblclick(function() {
    $(this).css('font-size', '18px');
});
function toRed(e) {
    $(e.target).css({
        'color': 'red'
    });
}
function toBlack() {
    $(this).css({
        'color': 'black'
    });
}
$('li').hover(toRed,toBlack);

