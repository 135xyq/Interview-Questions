// 输入50a6we8y20x
// 输出50个a，6个we，8个y，20个x
function parse(str){
    const res = str.match(/\d+[A-z]+/g);
    res.forEach(str=>{
        let count = "",
            char = "";
        for(let c of str){
            const ascll = c.charCodeAt(0);
            if(ascll>=48&&ascll<=57){
                count+=c
            }
            else{
                char+=c
            }
        }
        console.log(`${+count}个${char}`)
    })
}