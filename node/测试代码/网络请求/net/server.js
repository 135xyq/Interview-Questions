const net = require("net");

const server = net.createServer();

server.listen(9527);

server.on("listening", () => {
	console.log("正在监听9527端口");
});

server.on("connection", (socket) => {
	console.log("有端口连接！");
	socket.write(`HTTP/1.1 200 OK

<html>
<head><title>404 Not Found</title></head>
<body>
<center><h1>404 Not Found</h1></center>
<hr><center>nginx</center>
</body>
</html>
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
<!-- a padding to disable MSIE and Chrome friendly error page -->
`);
	socket.end();
});
