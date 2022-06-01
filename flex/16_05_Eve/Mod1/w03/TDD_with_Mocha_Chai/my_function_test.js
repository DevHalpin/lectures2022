// Testing using simple node assert library
const assert = require('assert')
const {sayHello} =require('./my_function')

const actual = sayHello("Alice")
const expected = "Hello Alice"

assert.strictEqual(actual, expected)