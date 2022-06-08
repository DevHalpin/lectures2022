let x = 5;
console.log('x at the top of the file', x)

setTimeout(() => {
    x = 42;
    console.log('x in the timeout', x)
}, 1000)

setTimeout(() => {
    console.log('2. x in the timeout', x)
    x = 5
    console.log('3. x in the timeout', x)
}, 2000)

console.log('x at the bottom of the file', x)