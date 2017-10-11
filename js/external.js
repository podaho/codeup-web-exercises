console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var colorInput = prompt("What's your favorite color?");
colorInput = colorInput.trim();
colorInput = colorInput[0].toUpperCase() + colorInput.substring(1,colorInput.length);
alert("Cool! "+colorInput+" is my favorite color too!");
var changeMind = confirm("Did you change your mind?");
console.log(changeMind);