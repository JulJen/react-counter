
import React from "react";

const Resetbutton = ({ reset, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(reset);
    };
    return <button onClick={handleClick}>{reset}</button>;
  };
  
  export default Resetbutton;
  