import React from "react";

const Minusbutton = ({ decrement, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(decrement);
  };
  return <button onClick={handleClick}>-{decrement}</button>;
};

export default Minusbutton;
