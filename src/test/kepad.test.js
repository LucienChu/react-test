import React from "react";
import ReactDOM from "react-dom";
import Keypad from "../component/keypad";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Keypad />, div);
  ReactDOM.unmountComponentAtNode(div);
});
