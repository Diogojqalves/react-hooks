import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (running) {
            const timerId = setTimeout(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
            return () => {
                clearTimeout(timerId)
            }
        }
    });

    function handleToggleClick() {
        setRunning(prevRunning => !prevRunning);
    }

    function handleStopClick() {
        setCounter(0);
        setRunning(false);
    }

    return <>
        <h2>{counter}</h2>
        <button onClick={handleToggleClick}>Start / Pause</button>
        <button onClick={handleStopClick}>Stop</button>
    </>
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><Stopwatch /></React.StrictMode>);
