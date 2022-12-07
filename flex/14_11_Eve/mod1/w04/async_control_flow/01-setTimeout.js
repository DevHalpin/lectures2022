// console.log('before the setTimeout');

// setTimeout(() => {
//     console.log("Hello");
// }, 3000)

// setTimeout(() => {
//     console.log("Hey hey")
// }, 0)

// console.log('After the setTimeout');

const higherOrderFunc = (cb) => {
  const data = {
    username: "David",
  };

  console.log("before timeout call");

  setTimeout(() => {
    data.username = "Bob";
    cb();
  }, 1000);

  console.log("after timeout call");
  return data
};

console.log("before the main");
const result = higherOrderFunc(() => {
  console.log("inside callback");
});
setTimeout(() => {
  console.log(result);
}, 2000);
console.log("after the main");
