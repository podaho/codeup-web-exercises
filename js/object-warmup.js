// ================================= OBJECTS WARM UP
// In pairs, solve the following problems...
// ---- EXERCISE 1
// 1. Write a function, deactivateMembers() 
// to take in the following array of objects as an input:
var members = [
    {
        joined: 2009,
        name: "John",
        activeMember: true
    },
    {
        joined: 2011,
        name: "Sally",
        activeMember: true
    },
    {
        joined: 2013,
        name: "John",
        activeMember: true
    },
];
// The function should return an output of the same array of objects with all activeMember properties set to false
// and contain an additional property of dateDeactivated set to 2017.
console.log((function(arr) {
    var retArr = [];
    arr.forEach(function(element) {
        var newElem = {
            joined: element.joined,
            name: element.name,
            activeMember: false,
            dateDeactivated: 2017
        };
        retArr.push(newElem);
    });
    return retArr;
})(members));
// ---- EXERCISE 2
// 1. Define an object, "canOfSoda", using dot syntax to add and assign the following properties:
//     - a property of isEmpty assigned a boolean value of false
//     - a property of isOpen assigned a boolean value of false
//     - a method of open() which sets the isOpen to true if the property is false when the method is initially called
//     - a method of pourOut() which sets the isEmpty to true if the isEmpty property is false and the isOpen is true
var canOfSoda = {};
canOfSoda.isEmpty = false;
canOfSoda.isOpen = false;
canOfSoda.open = function() {
    if(!this.isOpen) {
        this.isOpen = true;
    }
};
canOfSoda.pourOut = function() {
    if(this.isOpen && !this.isEmpty) {
        this.isEmpty = true;
    }
};

/*if(canOfSoda.isEmpty === false && canOfSoda.isOpen === false) {
    canOfSoda.open();
    if(canOfSoda.isEmpty === false && canOfSoda.isOpen === true) {
        canOfSoda.pourOut();
        if(canOfSoda.isEmpty === true && canOfSoda.isOpen === true) {
            console.log('Unit Test for canOfSoda Successful: All Methods Passed Testing');
        } else {
            console.log('Failure: pourOut() method failed');
        }
    } else {
        console.log('Failure: open() method failed');
    }
} else {
    console.log('Failure: object initialization failed');
}*/

canOfSoda = {};
// 2. Define the above object again using object literal syntax.
var canOfSoda = {
    isEmpty: false,
    isOpen: false,
    open: function() {
        if(!this.isOpen) {
            this.isOpen = true;
        }
    },
    pourOut: function() {
        if(this.isOpen && !this.isEmpty) {
            this.isEmpty = true;
        }
    }
};

/*if(canOfSoda.isEmpty === false && canOfSoda.isOpen === false) {
    canOfSoda.open();
    if(canOfSoda.isEmpty === false && canOfSoda.isOpen === true) {
        canOfSoda.pourOut();
        if(canOfSoda.isEmpty === true && canOfSoda.isOpen === true) {
            console.log('Unit Test for canOfSoda Successful: All Methods Passed Testing');
        } else {
            console.log('Failure: pourOut() method failed');
        }
    } else {
        console.log('Failure: open() method failed');
    }
} else {
    console.log('Failure: object initialization failed');
}*/

// BONUS
// 3. Create an array call cansOfSoda containing of 3 canOfSoda objects with the same properties and values as described above. 
// The objects should be named, canOfSoda1, canOfSoda2, canOfSoda3.
function createSoda() {
    var canOfSoda = {
        isEmpty: false,
        isOpen: false,
        open: function() {
            if(!this.isOpen) {
                this.isOpen = true;
            }
        },
        pourOut: function() {
            if(this.isOpen && !this.isEmpty) {
                this.isEmpty = true;
            }
        }
    };
    return canOfSoda;
}
var canOfSoda1 = createSoda();
var canOfSoda2 = createSoda();
var canOfSoda3 = createSoda();
var cansOfSoda = [canOfSoda1, canOfSoda2, canOfSoda3];
// 4. Iterate over the cansOfSoda array and open() and pourOut() each canOfSoda object
// 5. Console log the cansOfSoda array to check if the methods worked correctly.
cansOfSoda.forEach(function(elem) {
    if(elem.isEmpty === false && elem.isOpen === false) {
        elem.open();
        if(elem.isEmpty === false && elem.isOpen === true) {
            elem.pourOut();
            if(elem.isEmpty === true && elem.isOpen === true) {
                console.log('Unit Test for canOfSoda Successful: All Methods Passed Testing');
            } else {
                console.log('Failure: pourOut() method failed');
            }
        } else {
            console.log('Failure: open() method failed');
        }
    } else {
        console.log('Failure: object initialization failed');
    }
});
