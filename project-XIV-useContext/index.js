import React, {useContext} from "react";
import {createRoot} from "react-dom/client";
import StoreFront from "./StoreFront.js";
import Navbar from "./Navbar.js";
import {AppProvider, AppContext} from './AppContext.js'


function App() {
    const context = useContext(AppContext)
    console.log(context);
    return <div className={context.theme}>
        <Navbar />
        <StoreFront />
    </div>;
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><AppProvider><App/></AppProvider></React.StrictMode>);