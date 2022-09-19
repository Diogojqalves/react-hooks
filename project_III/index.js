//index.js
import React, {useState} from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    if (loggedIn){
        return <>
            <StoreFront />
            <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
        </>;
    }else {
        return <>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
    </>;
    }
}

render(<App />, document.querySelector("#react-root"));