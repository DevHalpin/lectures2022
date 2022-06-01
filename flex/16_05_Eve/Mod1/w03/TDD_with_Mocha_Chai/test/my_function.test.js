// const chai = require('chai');
const assert = require('chai').assert;  // get only the assert object from the chai library
const {sayHello} = require('../my_function') // import our function we want to test

const actual = sayHello("Alice") // actual is the exact value returned from our function
const expected = "Hello Alice" // expected is what we expect to be returned


describe("Tests for My Function", () => { // provides a title to seperate our various tests
    it('should return Hello Alice when Alice is provided as a parameter', () => {
        assert.strictEqual(actual, expected)
    })
    it('should say something', () => {
        console.log("Hello")
    })
})