import {useRef, useState} from 'react';

const UseRef = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef();
    countRef.current = count;

    const handleAlert = () => {
        setTimeout(() => {
            alert(countRef.current);
        }, 3000);
    }

    const inputRef = useRef();

    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <div>
                <label htmlFor='input-field'>Input:</label>
                <input type="text" id="input-field" ref={inputRef} />
            </div>
            <div>
                <button onClick={handleClick}>Set Focus</button>
            </div>
            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count => count + 1)}>Increment</button>
                <button onClick={handleAlert}>Show Alert</button>
            </div>
        </div>
    )

}

export default UseRef;