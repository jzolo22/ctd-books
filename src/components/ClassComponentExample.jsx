import React, { useState } from 'react';

export const ClassComponentExample = () => {
  const [count, setCount] = useState(0);
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
    setButtonClickCount(buttonClickCount + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
    setButtonClickCount(buttonClickCount + 1);
  };

  return (
    <>
      <h1>hello, CTD!</h1>
      <button onClick={handlePlus}>Plus</button>
      <button onClick={handleMinus}>Minus</button>
      <h2>{`Our count is: ${count}`}</h2>
      <h2>{`Our button click count is: ${buttonClickCount}`}</h2>
    </>
  );
};
