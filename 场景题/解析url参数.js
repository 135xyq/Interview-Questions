//解析url参数
let url =
  "http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
function parseParams(url){
    const paramStr = url.split("?")[1];
    const res = {};
    const paramArr = paramStr.split("&");
    for(let it of paramArr){
        const [key,value] = it.split("=");
        if(res[key]){
            res[key] = [].concat(value,res[key])
        }
        else{
            if(!value){
               res[key] = true
            }
            else{
                res[key] = decodeURIComponent(value)
            }
        }
    }
    return res;
}
console.log(parseParams(url))