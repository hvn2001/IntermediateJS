const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: false,
    enumerable: true
});

delete obj.testValue; // fails silently
console.log(obj.testValue); // -> 17