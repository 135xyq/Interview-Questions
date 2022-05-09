//实现sleep函数
const sleep = delay=>{
    const prev = Date.now();
    while(true){
        if(Date.now()-prev>=delay){
            break;
        }
    }
}