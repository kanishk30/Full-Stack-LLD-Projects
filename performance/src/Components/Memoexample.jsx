import React, { useState, useMemo } from 'react';


const generateLargeArray = () => {
    const largeArr = [];
    for (let i = 0; i < 1000000; i++) {
        largeArr.push(i);
    }
    return largeArr;
}

const sumArr = arr => {
    console.log('Finding sum...');
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const Counter = () => {

    const [count, setCount] = useState(0)
    const largeArray = useMemo(() => generateLargeArray(), [])
    const sum = useMemo(() => sumArr(largeArray), [largeArray])

    return (
        <div>
            <h1>Sum: {sum} </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Counter
