# cookie/localStorage/sessionStorage的区别?

- 存储大小方面

  cookie只能存储5kb左右的数据, 而localStorage和sessionStorage大概可以存储5MB左右的数据

- 过期时间方面

  cookie可以通过设置expires或者max-age字段来指定过期时间.

  localStorage需要手动调用removeItem或者clear方法清除数据, 否则数据会持久化存储在本地

  sessionStorage中的数据在页面关闭时会被清空

- 与服务器的交互方面

  服务器可以通过在响应头中设置set-cookie字段在浏览器端设置cookie, 并且浏览器每次发送请求时也会附带合适的cookie到请求头中。而localStorage和sessionStorage只是将数据存储在本地, 不会与服务器交互

- 安全性方面

  cookie如果设置了httpOnly字段, 是无法通过js获取的。

  而sotrage无论如何都可以被js获取