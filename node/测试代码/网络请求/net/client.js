const net =require("net");

const socket = net.createConnection({
    host:"127.0.0.1",
    port:9527
},()=>{
    console.log("连接成功！")
    socket.on("data",data=>{
        console.log(data.toString("utf-8"))
    })
})
