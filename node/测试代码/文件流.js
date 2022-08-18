const path = require("path");
const fs = require("fs");

const filename = path.resolve(__dirname,"./读取文件/b.txt")
const filename1 = path.resolve(__dirname,"./读取文件/c.txt")

const rs = fs.createReadStream(filename, {
    encoding: 'utf-8',
    highWaterMark: 1
})

// 文件打开事件

rs.on('open', () => {
    console.log('文件被打开了!')
})


// rs.on("data",res=>{
//     console.log(res)
// })

const ws = fs.createWriteStream(filename1,{
    encoding:"utf-8",
    highWaterMark:1,
})

// rs.pipe(ws)

rs.on("data",data=>{
    const flag = ws.write(data);
    if(!flag){
        rs.pause();
    }
})

ws.on("drain",()=>{
    rs.resume();
})


rs.on("end",()=>{
    ws.end();
    console.log("复制完成")
})
