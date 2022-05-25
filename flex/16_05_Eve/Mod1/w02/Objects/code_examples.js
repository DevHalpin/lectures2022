// let myString = "hello world";
// myString = 'goodbye world';   -- creates a new myString primitive and the old one is removed from memory 

// const changeString = (string) => {
    
//     string = 'Goodbye world'
//     console.log(string);  -- will print 'Goodbye world'
// }
//  changeString(myString);

//  console.log(myString) -- will print 'hello world'

// const secondString = myString.replace('hello', 'goodbye');

// console.log(myString) -- will still print 'hello world' as primitives are immutable

let myObj = {
    firstName: "David",
    lastName: "Halpin",
    array : [1, 2, 3],
    object: {
        name: "David",
        job: "Instructor"
    }
    // changeName: function() {
    //     this.firstName = "Rachel"
    //     console.log(`${this.firstName} ${this.lastName}`)
    // },
    // sayFullName: function () {
    //     console.log(`My full name is ${this.firstName} ${this.lastName}`);
    // }
}

for (const element in myObj) {
    //check if the value of this element is an array and print out its contents if so
    if(Array.isArray(myObj[element])) {
        for(number of myObj[element]) {
            console.log(number)
        }
    //check if the value of this element is an object and print out its contents if so
    } else if(typeof myObj[element] === 'object') {
        for(const string of Object.values(myObj[element])) {
            console.log(string)
        }
    // if the value is not an array or an object then it must be a primitive and we can just console log the element directly
    } else {
        console.log(element)
    }
}

// const entries = Object.entries(myObj)

// console.log(entries)

// for(const property of Object.values(myObj)) {
//     console.log(property)
// }

// let copy = myObj
// myObj = null

// copy.sayFullName()