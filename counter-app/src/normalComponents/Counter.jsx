import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    return (
        <>

            <h1>Counter</h1>
            <div className="card">
                <button onClick={handleDecrement}>
                    -
                </button>
                {count}
                <button onClick={handleIncrement}>
                    +
                </button>
            </div>
        </>
    )
}

export default Counter
