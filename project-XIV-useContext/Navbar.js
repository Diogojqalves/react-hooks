import {useContext} from "react";
import {AppContext} from "./AppContext";
export default function Navbar() {
    const context = useContext(AppContext)
        function handleCurrencyChange(event) {
        context.setCurrency(event.target.value);
    }
    return <>
        Shopping in <select onChange={handleCurrencyChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
        </select>
        - Using {context.theme} theme <button onClick={context.toggleTheme}>Toggle theme</button>
        <hr />
    </>;
}