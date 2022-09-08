function One(){
    this.say=function(){
        console.log(this.red)
    }
}

One.prototype = {
    color:"red",
};


let one = new One();
console.log(one.color)
const obj={color:'yellow'}
One.call(obj);
console.log(one.say())

