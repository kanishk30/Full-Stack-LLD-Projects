import React from 'react';
import { increment, decrement } from '../redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    // const counter = useSelector(state => state.value)// wrong
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()


    const handleIncrement = () => {
        dispatch(increment())
        // incremeny will happen
    }

    const handleDecrement = () => {
        dispatch(decrement())
        // decr. will happen
    }

    return (
        <>

            <h1>Redux Counter</h1>
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
