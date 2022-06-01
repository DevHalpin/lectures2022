

sayHello = (name) => {
    return(`Hello ${name}`)
}

// 3 different ways to export functions

// module.exports = sayHello
// module.exports.sayHello = sayHello

//most common way of exporting is make a new object as below
module.exports = { sayHello } 


// console.log(arguments)
