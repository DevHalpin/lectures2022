function createIncrement(incBy) {
    let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }
  function log() {
      const message = `Current value is ${value}`;
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement(1);
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
// Does not work!
log();
