import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function Clock() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
    setInterval(() => {
        // set a new instance of date every second
        setDate(new Date()); 
    }, 1000);
    //cleanup the side effect
    clearInterval(setInterval)
}, []);
    return <h2>{date.toLocaleTimeString()}</h2>;
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><Clock /></React.StrictMode>);