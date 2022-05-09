function all(promiseArr){
    if(!Array.isArray(promiseArr)){
        throw new TypeError("promiseArr must be a array");
    }
    return new Promise((resolve,reject)=>{
        let len = promiseArr.length;
        const result = new Array(len).fill(null);
        promiseArr.forEach((pro,i)=>{
            //当在promiseArr中传入非promise项时, 会通过Promise.resolve将其转化为promise
            Promise.resolve(pro).then(res=>{
                result[i] = res;
                if(len===1){
                    resolve(result)
                }
                len--;
            },err=>{
                 reject(err);
            })
        })
    })
}