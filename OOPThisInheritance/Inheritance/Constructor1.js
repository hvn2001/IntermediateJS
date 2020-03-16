function Fn() {
}

console.log(Fn.prototype.constructor === Fn);
// -> true


const obj = new Fn();

console.log(obj.constructor);
// -> [Function: Fn]


// Why it’s Useful
const normalObj = {};
const fnObj = new Fn();

console.log(normalObj.constructor); // -> [Function: Object]
console.log(fnObj.constructor); // -> [Function: Fn]