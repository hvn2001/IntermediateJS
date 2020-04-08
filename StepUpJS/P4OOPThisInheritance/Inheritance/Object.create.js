const prototypeObj = {
    testValue: 'Hello!'
};

const obj = Object.create(prototypeObj);
console.log(obj); // -> {}

console.log(
    Object.getPrototypeOf(obj) === prototypeObj
); // -> true

console.log(obj.testValue); // -> 'Hello!'