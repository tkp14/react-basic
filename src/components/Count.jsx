import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count * 2)
  }

    return (
      <div>
        <p className="click-times">クリックした回数： {count} 回</p>
        <button onClick={handleClick}>
          ボタンA
        </button>
      </div>
    );
  };

  export default Count;
