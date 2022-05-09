function race(promiseArr){
    return new Promise((resolve,reject)=>{
        promiseArr.forEach(pro=>{
            pro.then(res=>{
                return resolve(res)
            },err=>{
                return reject(err)
            })
        })
    })
}