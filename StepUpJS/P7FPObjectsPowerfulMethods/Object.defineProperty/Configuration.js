const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: false,
    configurable: true,
    enumerable: true
});

obj.testValue = 22; // fails silently
console.log(obj.testValue); // -> 17

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: true,
    enumerable: true
});

obj.testValue = 35; // assignment works, as
// previous rule was overridden

console.log(obj.testValue); // -> 35