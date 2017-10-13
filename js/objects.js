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

    for(var i = 0; i < books.length; i++) {
        showBookInfo(books[i], i);
    }

})();
