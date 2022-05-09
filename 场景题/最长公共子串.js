// ["hello","ello","llo"] =>return "llo"
function longestCommonSubStr(strArr){
    let shortest = strArr[0];
    for(let str of strArr){
        if(str.length<shortest.length){
            shortest = str;
        }
    }
    const len = shortest.length;
    for(let i=len;i>=0;i--){
        for(j=0;j<=len-i;j++){
            const substr = shortest.slice(j,i+j);
            let flag = true;//substr是否是公共子串
            for (const str of strArr) {
                if(str.indexOf(substr)===-1){
                    flag = false;
                    break;
                }
            }
            if(flag){
                return substr
            }
        }
    }
    return "";
}