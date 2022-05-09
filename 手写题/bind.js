Function.prototype.myBind = function(ctx,...args1){
    ctx = ctx||window;
    const func = this;
    return function(...args2){
        //在绑定this的时候要考虑返回的函数使用用new调用, new调用时this执行实例对象否则this执行传入的上下文ctx
        return func.apply(this instanceof func?this:ctx,args1.concat(args2))
    }
}