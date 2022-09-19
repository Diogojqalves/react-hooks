import React, {useRef, useEffect} from "react";
import {createRoot} from "react-dom/client";

function Form() {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    return (<form>
        <h2>Welcome</h2>
        <input ref={inputRef} type="text" placeholder="Enter your name" />
    </form>);
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><Form /></React.StrictMode>);