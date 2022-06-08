let numLoops = 10;

const interval = setInterval(() => {
    console.log("Hello, this is loop: ", numLoops);
    numLoops -= 1;
    if (numLoops === 0) {
      clearInterval(interval);
    }
  }, 500);

// console.log(interval)
