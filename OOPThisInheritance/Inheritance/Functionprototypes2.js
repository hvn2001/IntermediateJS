function Fn() {
}

const obj = new Fn();

const firstProto = Object.getPrototypeOf(obj);
// firstProto === obj.__proto__
console.log(firstProto === Fn.prototype); // -> true

const secondProto = Object.getPrototypeOf(firstProto);
// secondProto === obj.__proto__.__proto__
console.log(secondProto === Object.prototype); // -> true

const thirdProto = Object.getPrototypeOf(secondProto);
// thirdProto === obj.__proto__.__proto__.__proto__
console.log(thirdProto === null); // -> true