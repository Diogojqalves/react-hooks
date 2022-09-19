import {createRoot} from "react-dom/client";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import StoreFront from "./StoreFront.js";
import ProductDetails from "./ProductDetails.js";
import Nav from "./Nav";
import About from "./About.js";
import Home from "./Home.js";
import NotFound from "./NotFound.js"

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/products">
                    <StoreFront />
                </Route>
                <Route path="/products/:id">
                    <ProductDetails />
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

createRoot(document.querySelector("#react-root")).render(<App />);