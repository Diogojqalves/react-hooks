import React from "react";

export default function AddProductForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="product-name">Name:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onChangeName}
          id="product-name"
          placeholder="Enter the name"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="product-description">Description:</label>
        <input
          type="text"
          value={props.description}
          onChange={props.onChangeDescription}
          id="product-description"
          placeholder="Enter the description"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation-message">{props.validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
