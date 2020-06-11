import React, { useState } from 'react'
import UpLoad from '../components/UpLoad'

const Details = () => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setNum(num + 2)}>
        Click me
      </button>
      <p>You clicked {num} num</p>
      <UpLoad />
    </div>
  );
}

export default Details