import React, {useState} from "react";

export default function Product(props) {
    const [count, setCount] = useState(0);
    const {details} = props;
    return <div className="product">
        <img width="50" alt="" src={details.image}/>
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={count == 0} onClick={() => setCount(count - 1)}>-</button>
            <h3 className="product-count">{count}</h3>
            <button className="product-add" onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
}