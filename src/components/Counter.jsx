import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(prevState => prevState + 1)
  }
  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  return (
    <div>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>UP</button>
      <button onClick={countDown}>DOWN</button>
    </div>
  );
};

export default Counter;
