let request = function(id){
    return new Promise((resolve,reject)=>{
        //随机一个执行时间
        let time = Math.floor(10000*Math.random());
        console.log(`id为${id}开始请求,预计执行时间${time/1000}`)
        setTimeout(()=>{
            resolve(id);
        },time)
    }).then((id)=>{
        console.log(`id为${id}的请求完成`)
        return id;
    })
}
/**
 * 
 * @param {*} num 总共有多少请求
 * @param {*} limit 同时最多发出的请求个数
 */
async function run(num,limit){
    const pool = [];//promise 池
    for(let i=1;i<=num;i++){
        const pro = request(i);
        pool.push(pro);
        pro.finally(()=>{
            pool.splice(pool.indexOf(pro),1);
        })
        if(pool.length===limit){//如果当前已经有limit个请求在执行
            await Promise.race(pool);
        }
    }
}
run(10,5)