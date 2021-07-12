import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  // count + 1をしてしまうとタイムラグで望む挙動が得られないので注意
  const countUp = () => {
    setCount(prevState => prevState + 1)
  }

  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  useEffect( effect => {
    console.log("今のカウントは", count)
  }, [count])

  return (
    <div>
      <p>現在のカウント：{count}</p>
      <button onClick={countUp}>UP</button>
      <button onClick={countDown}>DOWN</button>
    </div>
  );
};

export default Counter;
