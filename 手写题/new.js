function _new(Constructor,...args){
    const obj = {};
    obj.__proto__ = Constructor.prototype;
    const res = Constructor.apply(obj,args);
    const flag = res&&(typeof res==="object"||typeof res==="function");
    return flag?res:obj
}