import React from "react";
import { render } from "react-dom";
import StoreFront from "./StoreFront.js";

function App() {
  return <StoreFront />;
}

render(<App />, document.querySelector("#react-root"));
