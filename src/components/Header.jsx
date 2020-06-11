import React, { useState, useEffect } from 'react'
import useFriendStatus from './useFriendStatus'

const Header = () => {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCounts] = useState(1);
  const isOnline = useFriendStatus(count)
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
    // useFriendStatus(count)
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <h5>isOnline: {isOnline}</h5>
      <button onClick={() => setCounts(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Header