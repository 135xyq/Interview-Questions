# 手写String.prototype.indexOf

```js
String.prototype.myIndexOf = function (subStr){
    const str = this.valueOf();
    if(subStr.length>str.length){
        return -1;
    }
    const subLength = subStr.length,
          parentLength = str.length;
    for(let i=0;i<=parentLength-subLength;i++){
        if(str.slice(i,subLength+i)===subStr){
            return i;
        }
    }
    return -1;
}
```