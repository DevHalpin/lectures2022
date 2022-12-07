// setInterval(() => {
//     console.log("Hello there!")
// }, 1000)

let iterations = 0;

const interval = setInterval(() => {
    iterations++;
    console.log("Hello there!");
    console.log(iterations);
    if (iterations > 10) {
        clearInterval(interval);
    }
}, 1000);