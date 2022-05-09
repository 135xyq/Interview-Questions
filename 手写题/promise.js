const PENDING = "pending",
      RESOLVED = "resolved",
      REJECTED = "rejected";
class MyPromise{
    promiseState = PENDING;
    promiseResult = null;
    resolvedCallbacks = [];//当promise推向resolved时要运行的回调函数列表
    rejectedCallbacks = [];//当promsie推向rejected时要运行的回调函数列表
    constructor(fn){
        try{
            fn(this.resolve.bind(this),this.reject.bind(this));
        }
        catch(err){
            this.reject(err);
        }
    }
    /**
     * 处理推向已决,即抽离出resolve和reject的公共代码
     * @param {*} value 推向已决时的状态数据 
     * @param {*} finalState  要推向resolved还是rejected
     */
    pushSettled(value,finalState){
        if(this.promiseState===PENDING){//只有当前为挂起状态时,才将其推向已决
            setTimeout(()=>{
                this.promiseState = finalState;
                this.promiseResult = value;
                //两种类型的回调都要运行一遍, 因为要考虑值穿透现象(例如当前promise推向resolved,却注册了catch)
                this.rejectedCallbacks.forEach(cb=>{
                    cb(value);
                })
                this.resolvedCallbacks.forEach(cb=>{
                    cb(value);
                })
            },0)
        }
    }
    resolve(state){
        this.pushSettled(state,RESOLVED);
    }
    reject(err){
        this.pushSettled(err,REJECTED);
    }
    /**
     * 串联promise 当前promise调用then/catch时，本质就是返回一个新promise
     * 并且在当前promise的then/catch回调函数列表中添加回调
     * @param {*} callback  //通过then/catch传入的回调
     * @param {*} finalState //为当前promise注册finalState的回调 
     * @param {*} queue //当前promise的回调函数列表
     * @param {*} resolve //返回的promise的resolve方法
     * @param {*} reject //返回的pomise的reject方法
     * @returns 
     */
    linkPromise(callback,finalState,queue,resolve,reject){//处理promise串联
        if(typeof callback!=="function"){
            return;
        }
        if(this.promiseState===finalState){//如果当前promise已决推向已决并且此时注册了对应的回调
            setTimeout(()=>{
                callback(this.promiseResult);
            },0)
            return ;
        }
        queue.push(res=>{
            try{
                if(this.promiseState!==finalState){//如果说本次then/catch没有传入对应的回调, 则发生值穿透现象
                    if(this.promiseState===RESOLVED){
                        resolve(this.promiseResult);
                    }
                    else{
                        reject(this.promiseResult);
                    }
                    return;
                }
                const result = callback(res);
                if(result instanceof MyPromise){//如果回调函数返回的是promise,则本次串联返回的promise的状态和状态值与上述promise一样
                    result.then(res=>{
                        resolve(res);
                    },err=>{
                        reject(err);
                    })
                }
                else{
                    resolve(result);
                }
            }
            catch(err){
                reject(err);
            }
        })
    }
    then(thenable,catchable){
        return new MyPromise((resolve,reject)=>{
            this.linkPromise(thenable,RESOLVED,this.resolvedCallbacks,resolve,reject);
            this.linkPromise(catchable,REJECTED,this.rejectedCallbacks,resolve,reject);
        })
    }
    catch(catchable){
        return new MyPromise((resolve,reject)=>{
            this.linkPromise(catchable,REJECTED,this.rejectedCallbacks,resolve,reject);
        })
    }
}
