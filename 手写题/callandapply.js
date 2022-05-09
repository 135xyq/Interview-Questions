Function.prototype._call = function(ctx,...args){
    if(typeof this!=="function"){
        throw new TypeError("_call must be called by function")
    }
    //传入null/undefined则默认绑定window
    ctx = ctx===null||ctx===undefined?window:Object(ctx);
    const tag = Symbol("func");
    ctx[tag] = this;
    const res = ctx[tag](...args);
    delete ctx[tag];
    return res;
}
Function.prototype.myApply = function(ctx,args){
    if(typeof this!=="function"){
        throw new Error("mycall must be called by a function");
    }
    ctx = ctx||window;
    ctx.func = this;
    const res = ctx.func(...args);
    delete ctx.func;
    return res;
}