const assert = require('chai').assert;


const {sayHello} = require("../sayHello")
const {sayGoodbye} = require("../sayHello")

console.log(sayGoodbye())

// console.assert(1 === 1, 'not equal')
// console.assert(1 !== 1, 'not equal')

// assert.equal(1,2);

// assert.equal(1,1);

// assert.equal(1,'1');
// assert.strictEqual(1, '1');

describe('Basic Testing', function () {
    it('asserts that 1 equals 1', function() {
        console.log("Hello")
    })
    it ('returns type of string', function () {
        assert.typeOf("Hello", 'string')
    })
});
describe('Say Hello testing', function () {
    it('returns Hello there', function() {
        const actual = 'David'
        const expected = 'Hello there David'

        // assert.strictEqual(actual, expected);
        assert.strictEqual(sayHello(actual), expected)
    })
})

