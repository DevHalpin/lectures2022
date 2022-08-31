import { useState } from 'react';

function Counter() {
  const countState = useState(0);
  const count = countState[0];
  const setCount = countState[1];

  // A function to help us update our count.
  const addOneToCount = () => {
    // Remember, we never modify our current state value directly.
    // We ALWAYS use the "setState" function we get back from...
    // the "useState" hook.

    // Set count can accept a direct value, or a callback.
    // The callback will receive the current/previous value...
    // for your convenience! This callback must return the...
    // new value you'd like stored in state.
    setCount((previousCountValue) => {
      return previousCountValue + 1;
    });
  };

  // We can add event listeners right in our JSX:
  return (
    <button onClick={addOneToCount}>
      Clicked {count} Times
    </button>
  );
}

export default Counter;