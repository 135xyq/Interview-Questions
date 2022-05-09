//完全正则表达式
function formatNum(num){
    let flag = num.toString().indexOf(".");//小数点出现的位置
    let int = num+"",//整数部分
        decimal = ""; //小数部分
    if(flag!==-1){//如果有小数点
        int = num.toString().slice(0,flag);
        decimal = num.toString().slice(flag);
    }
    return int.replace(/\d(?=(\d{3})+$)/g,$=>$+",")+decimal
}
//稍微繁琐的解法
function _comma(number) {    
    // 补全代码
    let str = number.toString();
    const flag  = str[0]==="-";//是否为负数
    str = flag?str.slice(1):str;
    let int = str,
        decmial = "";
    if(str.indexOf(".")!==-1){
        int = str.split(".")[0];
        decmial = "." + str.split(".")[1];
    }
    if(int.length<=3){
        return flag?"-"+int + decmial:int + decmial;
    }
    const res = int.length%3;
    let result = "";
    if(!res){
         result = int.replace(/\d{3}/g,$=>","+$).slice(1) + decmial;
        return flag?"-"+result:result;
    }
    result = int.slice(0,res) + int.slice(res).replace(/\d{3}/g,$=>","+$) + decmial;
    return flag?"-"+result:result
}