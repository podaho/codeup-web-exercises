(function(){
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */
    var person = {
        firstName: "Po",
        lastName: "Lin"
    }

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from "+this.firstName+" "+this.lastName;
    }
    console.log(person.sayHello());

    /**
     * TODO:
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(elem) {
        var retStr = "Our valued customer "+elem.name+" has a grocery bill of $"+elem.amount+". ";
        var discountPercentage = 0;
        if(elem.amount >= 200) {
            retStr = retStr.concat(" His amount qualifies him to get a $"+(elem.amount*discountPercentage)+" off discount, leaving his bill to be $"+(elem.amount*(1-discountPercentage))+".");
        } else {
            retStr = retStr.concat(" Unfortunately, his amount is lower than $200, which does not qualify for a discount. Sorry!");
        }
        console.log(retStr);
    })

    /**
     * TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with a firstName and
     * lastName. Be creative and add at least 5 books to the array
     *
     * Example:
     *  > console.log(books[0].title) // "The Salmon of Doubt"
     *  > console.log(books[0].author.firstName) // "Douglas"
     *  > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Harry Potter and the Sorcerer's stone",
            author: {
                first: "J.K.",
                last: "Rowling"
            }
        },
        {
            title: "Moby Dick",
            author: {
                first: "Herman",
                last: "Melville"
            }
        },
        {
            title: "Hunger Games",
            author: {
                first: "Suzanne",
                last: "Collins"
            }
        },
        {
            title: "Programming with Scala",
            author: {
                first: "Mark",
                last: "Lewis"
            }
        },
        {
            title: "Things Fall Apart",
            author: {
                first: "Chinua",
                last: "Achebe"
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for(var i = 0; i < books.length; i++) {
        var retStr = "Book #"+(i+1)+"\nTitle: "+books[i].title+"\nAuthor: "+books[i].author.first+" "+books[i].author.last+"\n---\n";
        console.log(retStr);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author) {
        var book = {};
        book.title = title;
        book.author = {};
        book.author.first = author.split(" ")[0];
        book.author.last = author.split(" ")[1];
        return book;
    }

    books = [];
    books.push(createBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling"));
    books.push(createBook("Moby Dick", "Herman Melville"));
    books.push(createBook("Hunger Games", "Suzanne Collins"));
    books.push(createBook("Programming with Scala", "Mark Lewis"));
    books.push(createBook("Things Fall Apart", "Chinua Achebe"));

    function showBookInfo(book, index) {
        var retStr = "Book #"+(index+1)+"\nTitle: "+book.title+"\nAuthor: "+book.author.first+" "+book.author.last+"\n---\n";
        console.log(retStr);
    }

    books.forEach(function(elem,index,array) {
        showBookInfo(elem,index);
    });

})();

// BONUS 1 (create a dog object):
//
// The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//
// The dog object should have methods to:
//     bark() - will console.log “Woof!”
// 		getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

var dog = {
    breed: "Yorkie",
    weightInPounds: 14,
    age: 3,
    color: "beige/white",
    sterilized: false,
    shotRecords: [
        {
            date: "10/03/2014",
            typeOfShot: "Rabies"
        },
        {
            date: "10/03/2014",
            typeOfShot: "HPVA"
        },
        {
            date: "10/03/2015",
            typeOfShot: "Rabies"
        },
        {
            date: "05/21/2015",
            typeOfShot: "Kennel Cough"
        }
    ],
    bark: function() {
        console.log("Woof!");
    },
    getOlder: function() {
        var oldAge = this.age;
        this.age = this.age + 1;
        var newAge = this.age;
        console.log("Old age was "+oldAge+", after 1 year it's "+newAge);
    },
    fix: function() {
        if(this.sterilized) {
            console.log("Can't sterilize a dog twice, dawg");
        } else {
            console.log("Poor thing :/");
            this.sterilized = true;
        }
    },
    vaccinate: function(shotName) {
        var today = new Date();
        var yyyy = today.getFullYear();
        var mm = today.getMonth()+1;
        var dd = today.getDate();
        this.shotRecords.push({
            date: mm+"/"+dd+"/"+yyyy,
            typeOfShot: shotName
        })
        console.log("Shot Record Added!")
        console.log("Date: "+this.shotRecords[this.shotRecords.length-1].date);
        console.log("Type: "+this.shotRecords[this.shotRecords.length-1].typeOfShot);
    }
}


// BONUS 2 (expanding on the books object exercise):
//
// Add a property “keywords” that contains an array of possible genres the book may be categorized by
// Add a boolean property “available” and set it to true
// Add a dateAvailable property that has a string of the date/time when the book will be available
// Add a method lend() that...
// - changes the available property to false if it is not already false
// - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
// (to do this, research the JS Date object and use methods from it in your code)
// Add a method receive() that...
// - changes the available property to true
// - changes the dateAvailable property to the string “now”
//

function createBook(title, author, keywords) {
    var [firstname, lastname] = author.split(' ');
    var book = {
        title,
        keywords,
        author: {
            firstname,
            lastname,
        }
    };

    book.available = true;
    book.dateAvailable = "now";
    book.lend = function() {
        if(this.dateAvailable === "now") {
            var inTwoWeeks = new Date(+new Date + 12096e5);
            this.available = false;
            this.dateAvailable = (inTwoWeeks.getMonth()+1)+"/"+inTwoWeeks.getDate()+"/"+inTwoWeeks.getFullYear();
            console.log(this.title+" rented, return on "+this.dateAvailable);
            alert(this.title+" rented, return on "+this.dateAvailable);
        } else {
            console.log("Can't rent "+this.title+"; it's not available");
            alert("Can't rent "+this.title+"; it's not available");
        }
    };
    book.receive = function() {
        this.available = true;
        this.dateAvailable = "now";
        console.log("Received "+this.title+".");
        alert("Received "+this.title+".");
    };
    return book;
}

var books = [
    createBook("Harry Potter and the Sorcerer's stone", "J.K. Rowling", ["fiction", "Magic", "series", "wizards", "witches"]),
    createBook("Moby Dick", "Herman Melville", ["fiction", "classic", "whale", "moby", "dick"]),
    createBook("Hunger Games", "Suzanne Collins", ["fiction", "modern", "death", "romance", "action"]),
    createBook("Programming with Scala", "Mark Lewis", ["educational", "programming", "scala", "guide", "software"]),
    createBook("Things Fall Apart", "Chinua Achebe", ["fiction", "classic", "tragedy", "literature", "famous"])
];

function showBookInfo(book, index) {
    var retStr = "Book #"+(index+1)+"\nTitle: "+book.title+"\nAuthor: "+book.author.firstname+" "+book.author.lastname+"\nKeywords: "+book.keywords+"\nAvailable Date: "+book.dateAvailable+"\n---\n";
    console.log(retStr);
    return retStr;
}

function showAllBookInfo() {
    var retStr = "";
    books.forEach(function(elem,index,array) {
        retStr += showBookInfo(elem,index);
    });
    alert(retStr);
}


// BONUS 3 (expanding on the books object exercise):
//
// Create an application to take in user input to build the books array of objects.
//     Allow the user to continue adding books or to finish adding books.
//     Once the books have been added, output the books array in the console.
//
//     Allow a user to delete a book or a group of books by title or author last name
//
// Allow a user to edit a book by index number in the books array

function createBookPrompt() {
    do {
        var title = prompt("Enter book title:");
    } while(!title);
    do {
        var author = prompt("Enter book author:");
    } while(!author);
    do {
        var keywords = prompt("Enter book keywords separated by commas:");
    } while(!keywords);
    createBook(title, author, keywords);
}

function editBookPrompt() {
    do {
        var option = prompt("Enter the book # for which book you would like to edit:");
    } while(!option && parseInt(option)>0 && parseInt(option)<=books.length);
    var option2 = prompt("What would you like to edit below?\n--------------------------------\n"+showBookInfo(books[parseInt(option)-1],parseInt(option)-1)+"\n--------------------------------\n1. Title\n2. Author First Name\n3. Author Last Name\n4. Key Words\n5. Nevermind");
    switch(option2) {
        case "1":
            books[parseInt(option)-1].title = prompt("Enter new title:");
            break;
        case "2":
            books[parseInt(option)-1].author.firstname = prompt("Enter new first name:");
            break;
        case "3":
            books[parseInt(option)-1].author.lastname = prompt("Enter new last name:");
            break;
        case "4":
            books[parseInt(option)-1].keywords = prompt("Enter new keywords separated by commas:");
            break;
        case "5":
            break;
        default:
            alert("Invalid Input");
            editBookPrompt();
    }
}

function removeBookPrompt() {
    do {
        var option = prompt("Enter the book # for which book you would like to remove:");
    } while(!option && parseInt(option)>0 && parseInt(option)<=books.length);
    books.splice(parseInt(option-1),1);
}

function returnOrBorrowPrompt() {
    do {
        var option = prompt("Enter the book # for which book you would like to borrow/return:");
    } while(!option && parseInt(option)>0 && parseInt(option)<=books.length);
    do {
        var option2 = prompt("Select from options below:\n1. Borrow\n2. Return");
    } while(option2 !== "1" || option2 !== "2");
    if(option2 === "1") {
        books[parseInt(option)-1].lend();
    }
}

function menu() {
    var option = prompt("What would you like to do?\n1. List Books\n2. Add Book\n3. Edit Book\n4. Remove Book\n5. Borrow Book\n6. Return Book\n7. Exit");
    switch(option) {
        case "1":
            showAllBookInfo();
            menu();
            break;
        case "2":
            createBookPrompt();
            showAllBookInfo();
            menu();
            break;
        case "3":
            showAllBookInfo();
            editBookPrompt();
            showAllBookInfo();
            menu();
            break;
        case "4":
            showAllBookInfo();
            removeBookPrompt();
            showAllBookInfo();
            menu();
            break;
        case "5":
            showAllBookInfo();
            break;
        case "6":
            break;
        default:
            alert("Invalid Input");
            menu();
            break;
    }
}

//Run the line below to
//menu();

