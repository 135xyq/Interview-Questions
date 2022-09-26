/* function a() {
    console.log(1);
}
(function() {
    if (false) {
        function a() {
            console.log(2);
        }
    }
    console.log(typeof a); 
    a(); 
})()


 */

/* const arr = [1, 2, , 4, 5];

let b = arr.map((item) => item + 1);

arr.forEach((item) => {
	console.log(item);
});

console.log(b, arr);
 */

/* 
let arr =  [1,2,3]
let arr2 = [4,5]

let arr1 = arr.concat(arr2)

console.log(arr1,arr,arr2) */

/* const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
 */

var b = 10;
(function b() {
  b = 20;
  console.log(b)
})()
