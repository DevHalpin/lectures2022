import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const addOneToCount = () => {
        setCount((previousCountValue) => previousCountValue + 1 );
    }

    return(
    <button onClick={addOneToCount}>
        Clicked {count} Times
    </button>
    )
}

export default Counter;