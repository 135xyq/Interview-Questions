(function () {
	var x = y = 1;
    console.log("内部x:",x)
})();
var z;

console.log(y);
console.log(z);
console.log(x);

// 答案
// 内部x: 1
// 1
// undefined
// Uncaught ReferenceError: x is not defined

