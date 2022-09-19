import React, {useState, useEffect} from "react";
import {createRoot} from "react-dom/client";

function CurrencySelector() {
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        if (currency) {
        fetch("https://react-tutorial-demo.firebaseio.com/preferences.json", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({currency: currency})
        })
        .then(response => response.json())
        .then(data => {
            console.log("Grade added");
            console.log(data);
        });
        }
    }, [currency]);

    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }

    return <>
        <h3>Select currency</h3>
        <select onChange={handleCurrencyChange}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="cad">CAD</option>
        </select>
        <h1>{currency}</h1>
    </>;
}

createRoot(document.querySelector("#react-root")).render(<React.StrictMode><CurrencySelector /></React.StrictMode>);