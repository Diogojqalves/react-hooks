import React, {useContext} from "react";
import {createRoot} from "react-dom/client";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Button from "./Button.js";
import Footer from "./Footer.js";
import { ThemeProvider, ThemeContext } from './ThemeContext.js'

// App component is wrapped with <ThemeProvider /> (check createRoot().render() call below)
function App() {
    const context = useContext(ThemeContext);

    return (
        <>
            <Button onClick={context.toggleTheme}>Toggle theme</Button>
            <hr />
            <Navbar />
            <Main />
            <Footer/>
        </>
    );
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><ThemeProvider ><App /></ThemeProvider></React.StrictMode>);
