# 手写new

```js
function Car(name,size){
    this.name = name;
    this.size = size;
}
Car.prototype.myname = "car的原型";
function _new(Constructor,...args){
    const obj = {};
    obj.__proto__ = Constructor.prototype;
    Constructor.call(obj,...args);
    return obj;
}
const car = _new(Car,"宝马",20);
```

