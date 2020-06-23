import React, { useState } from 'react'

const Footer = () => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0)
  const [name, setName] = useState<string>()
  
  interface People {
    name: string,
    age: number,
    country?: string
  }


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
    </div>
  );
}

export default Footer