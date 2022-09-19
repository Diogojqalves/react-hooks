import {createRoot} from "react-dom/client";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import StoreFront from "./StoreFront.js";
import ProductDetails from "./ProductDetails.js"

function App() {
    return (
        <BrowserRouter>
        <Switch>
        <Route exact path="/">
        <StoreFront />
        </Route>
        <Route exact path="/products/:id">
        <ProductDetails />
        </Route>
        </Switch>
        </BrowserRouter>
    );
}

createRoot(document.querySelector("#react-root")).render(<App />);