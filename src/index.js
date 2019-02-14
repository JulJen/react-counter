import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import Minusbutton from "./components/Minusbutton";
import Resetbutton from "./components/Resetbutton";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = increment => {
    setCount(count + increment);
  };

  const decrementCount = increment => {
    setCount(count - increment);
  };

  const resetCount = reset => {
    setCount(count - count);
  };

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Button increment={1000} onClickFunction={incrementCount} />

      <Minusbutton decrement={1} onClickFunction={decrementCount} />
      <Minusbutton decrement={10} onClickFunction={decrementCount} />
      <Minusbutton decrement={100} onClickFunction={decrementCount} />
      <Minusbutton decrement={1000} onClickFunction={decrementCount} />

      <Resetbutton reset={"Reset"} onClickFunction={resetCount} />

      <span>{count}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
