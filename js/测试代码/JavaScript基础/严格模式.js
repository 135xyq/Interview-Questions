// (function noStrict() {
// 	b = 1;
// 	console.log(b);
//     delete b;
//     console.log(b)
// })();



// (function strict() {
// 	"use strict";
// 	a = 1;
// 	console.log(a);
// })();


(function noStrict() {
    function x(a,a){
        console.log(a)
    }
    x(1,2)
})()


(function strict() {
    function x(a,a){
        console.log(a)
    }
    x(1,2)
})
