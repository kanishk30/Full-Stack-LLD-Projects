import React, { useState, useRef } from 'react'

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    function handleStart() {
        if (!isRunning) {
            setIsRunning(true);

            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000)
        }


    }

    function handleStop() {
        // stop the timer.
        if (isRunning) {
            clearInterval(timerRef.current);
            setIsRunning(false);
        }
    }

    function handleReset() {
        clearInterval(timerRef.current)
        setIsRunning(false);
        setTime(0);
    }

    function formatTime() {
        // 1s == 00:00:01
        // 70s === 00:01:10
        // 3660s == 01:01:00
        // 3665s == 01:01:05

        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = Math.floor(time / 60);
        const getMins = `0${minutes % 60}`.slice(-2);
        const hours = Math.floor(time / 3600);
        const getHrs = `0${hours % 60}`.slice(-2);
        return `${getHrs}:${getMins}:${getSeconds}`;
    }

    return (
        <div>
            <h2>{formatTime()}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default StopWatch
