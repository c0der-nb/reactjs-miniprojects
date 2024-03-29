import React, {useState} from 'react';

export default function CounterApp() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={(e) => {
                setCount((prevCount) => prevCount+1)
                console.log(e.key)
                }} key={"2"}>Increment</button>
            <button onClick={() => setCount((prevCount) => prevCount-1)}>Decrement</button>
        </div>
    )
}