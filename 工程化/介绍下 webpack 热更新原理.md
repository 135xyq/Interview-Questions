# 介绍下 webpack 热更新原理

是如何做到在不刷新浏览器的前提下更新页面的

- 修改了一个或多个文件, 文件系统接收更改并通知webpack
- webpack重新编译构建一个或多个模块并且通知HMR 服务器
- HMR 服务器通过websocket通知HMR runtime更新, HMR运行时使用http请求替换jsonp
- HMR运行时替换更新的模块, 如果这些模块无法更新则触发页面刷新