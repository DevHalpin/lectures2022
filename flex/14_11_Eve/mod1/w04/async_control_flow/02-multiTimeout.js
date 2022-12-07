const nums = [2500, 5000, 500, 768, 817, 2345]

// const myFn = (delays) => {
//     for (const delay of delays) {
//         console.log("Hi")
//         setTimeout(() => {
//             console.log(delay);
//         }, delay)
//     }
// };

// myFn(delays);

const myFn = (delays, cb, isAsc = true) => {
    const sorted = [];
    const maxDelay = Math.max(...delays);
  
    // iterate through delays array
    for (const delay of delays) {
      setTimeout(() => {
        sorted.push(delay);
      }, isAsc ? delay : maxDelay - delay);
    }
    
    setTimeout(() => cb(sorted), maxDelay + 1);
  };
  
  myFn(nums, (sorted) => console.log(sorted));
  myFn(nums, (sorted) => console.log(sorted), false);