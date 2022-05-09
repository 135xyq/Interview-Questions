// [
//     {
//       name: "可乐",
//       categories: ["热门", "饮料"],
//     },
//     {
//       name: "苹果",
//       categories: ["热门", "食物"],
//     },
//     {
//       name: "洗衣液",
//       categories: ["生活用品"],
//     },
//   ];
  
//   [
//     { name: "热门", categories: ["可乐", "苹果"] },
//     { name: "饮料", categories: ["可乐"] },
//     { name: "食物", categories: ["苹果"] },
//     { name: "生活用品", categories: ["洗衣液"] },
//   ];
function transform1(arr){
    const types = {};
    arr.forEach(it=>{
        it.categories.forEach(cate=>{
            if(!types[cate]){
                types[cate] = {
                    name:cate,
                    categories:[it.name]
                }
            }
            else{
                types[cate].categories.push(it.name)
            }
        })
    })
    return Object.values(types)
}