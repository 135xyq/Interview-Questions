// function a() {
//     console.log(1);
// }
// (function() {
//     if (false) {
//         function a() {
//             console.log(2);
//         }
//     }
//     console.log(typeof a); 
//     a(); 
// })()



const arr = [1,2,,4,5];

let b = arr.map(item=>item+1);

arr.forEach(item=>{
    console.log(item)
})

console.log(b,arr)