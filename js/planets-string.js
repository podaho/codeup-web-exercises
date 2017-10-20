(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join("\n<br>\n");
    console.log(planetsString);

    planetsString = "<ul>\n\t<li>";
    planetsString += planetsArray.join("</li>\n\t<li>");
    planetsString += "</li>\n<ul>";
    console.log(planetsString);

    var thing = "";
    for(var i = 0; i < planetsArray.length; i += 1) {
        thing += "<li>"+planetsArray[i]+"</li>";
        if(i !== planetsArray.length-1) {
            thing += "\n\t";
        }
    }
    thing = "<ul>\n\t"+thing+"\n</ul>";
    console.log(thing);
})();