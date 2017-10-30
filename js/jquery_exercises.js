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

$('li').css('font-size','30px');
$('h1, p, li').css('background-color','yellow');
alert($('li').html());