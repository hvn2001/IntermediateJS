const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: true,
    enumerable: true
});

console.log(obj.testValue); // -> 17

console.log('----------The previous codeblock is nothing special. It’s equivalent to:---------');
const obj2 = {};
obj2.test = 17;
console.log(obj2.test); // -> 17