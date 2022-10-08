# http1.0和http1.1的区别

- 连接方式

   http1.0中, 默认是短连接。即请求完成后，tcp连接立即断开，这导致每发一个请求都需要重新建立TCP连接。

   http1.1中，默认是长连接，即connection字段默认值为keep-alive, 这意味着多个请求可以复用同一个TCP连接，大大减少了建立TCP连接的时间。

- 是否能请求资源的部分 range

  http1.0中，请求资源时只能请求整个资源，而不能指定范围请求。

  http1.1中，新增了range字段，该字段允许请求资源的一部分，例如文件断点续传就是通过该字段实现的。

- 和缓存相关的字段

  http1.0中主要使用expires字段控制缓存, http1.1中新增了cahe-control/Etag/last-modified字段来更精细化地控制缓存。

- 新增host字段

  http1.1中新增了host字段指示服务器的域名

- 新增一些请求方法如: put/options/head