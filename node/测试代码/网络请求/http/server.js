const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log('有请求来了!')
    console.log('请求地址:', req.url);
    console.log('请求方法:', req.method);
    console.log('请求头:', req.headers);

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString('utf-8')
    })

    req.on('end', () => {
        console.log('请求体:');
        console.log(body);
    })

    // 设置响应头信息
    res.setHeader('name', 'xyq');
    res.setHeader('lover', 'hsz');

    // 设置响应码
    res.statusCode = 404;

    // 设置响应体
    res.write('I love you!');
    res.end();

})

server.listen(8080)

server.on('listening', () => {
    console.log('正在监听8080')
})
