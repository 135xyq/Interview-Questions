const path = require("path");
const fs = require("fs");

const filePathA = path.resolve(__dirname,"./读取文件/a.txt");
const filePathB = path.resolve(__dirname,"./读取文件/b.txt");

const res1 = fs.readFileSync(filePathA)
// console.log(res.toString("utf-8"))

// fs.writeFileSync(filePathB,res1,{
//     flag:"a"
// })


// fs.stat(filePathB,(err,res)=>{
//     console.log("a.txt信息：",res)
// })

fs.readdir(path.resolve(__dirname,"./读取文件"),(err,res)=>{
    console.log(err,res)
})

fs.exists(path.resolve(__dirname,"./e"),(res)=>{
    console.log(err,res)
})