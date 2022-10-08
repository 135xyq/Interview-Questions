# JSONP处理跨域

## 何为同源策略

同源策略是浏览器的一种安全机制, 同源策略限制了来自同一个源中加载的文档或脚本如何与另一个源中的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制

会受同源策略影响的有:

- xmlHttpRequest
- dom, 主要指iframe标签
- cookie,localStorage,sessionStorage

 ### 如何判断是否同源？

当前源与目标请求源的协议, 域名, 端口号必须都完全相同才算同源

## jsonp原理

同源策略是主要用来限制xmlHttpRequest发送的网络请求, 而使用script标签发送网络请求即使跨域也能正常返回资源

jsonp需要前后端进行配合

前端: 

- 前端通过创建一个script标签, 并且设置其src属性为要请求的地址, src中的url地址后需要额外带一个参数callback, 并且需要预先定义一个与callback参数值同名的回调函数
- 将script标签插入文档, 开始发送请求

后端:

- 后端在返回数据时不再直接返回一个json格式的数据, 而是得到请求url地址中的callback参数值, 最终返回的数据为callback(json数据)

这样浏览器端在接受数据时, 会将callback(json数据)当成一段js代码执行, 即运行callback函数

#### 缺点

- 会打乱服务器返回数据的格式
- 只能处理get请求跨域



