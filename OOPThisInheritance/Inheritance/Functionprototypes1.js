function fn() {
}

const protoOfPrototype = Object.getPrototypeOf(fn.prototype);

// protoOfPrototype === fn.prototype.__proto__
console.log(protoOfPrototype === Object.prototype);
// -> true