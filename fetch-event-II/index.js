import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function CurrencyConversion() {
    const [currency, setCurrency] = useState("");
    const [rate, setRate] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (currency) {
            setIsLoading(true);
            fetch(`https://react-tutorial-demo.firebaseio.com/currencies/${currency}.json`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setRate(data);
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
                setIsLoading(false);
            });
        }
    }, [currency]);

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return <>
        <h2>Currency rates</h2>
        <select onChange={handleCurrencyChange} disabled={isLoading}>
            <option value="">Select a currency</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="cad">CAD</option>
        </select>
        <h3>1 {currency.toUpperCase()} = {rate} USD</h3>
    </>;
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><CurrencyConversion /></React.StrictMode>);