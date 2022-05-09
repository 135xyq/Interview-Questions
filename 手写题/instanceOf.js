function myInstanceOf(obj,Constructor){
    const prototype = Constructor.prototype;
    let list = obj.__proto__;
    while(list){
        if(list===prototype){
            return true;
        }
        list = list.__proto__;
    }
    return false;
}