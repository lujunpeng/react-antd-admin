import React from "react";
import Home from "../pages/Home"; //因为在一个文件夹下面创建的，所以要找到准确位置。
import Details from "../pages/Details";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Prompt,
} from "react-router-dom";
// import {Button,DatePicker,Icon} from 'antd';
// import 'antd/dist/antd.css'

class Router extends React.Component {
  render() {
    return (
      // 根容器
      <BrowserRouter>
        {/* <Prompt message="你确定要离开当前页面吗？" /> */}
        <div>
          <h1>这是根目录</h1>
          <hr />
          {/* 链接 */}
          <Link to="/home">首页</Link>  
          <Link to="/details">详情</Link>  
          <hr />
          {/* 路由规则，Route是配置路由的规则，同时也是一个占位符 */}
          <Route path="/home" component={Home} />
          <hr />
          <Route path="/details" component={Details}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
