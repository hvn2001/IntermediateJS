const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: false,
    configurable: true,
    enumerable: true
});

obj.testValue = 22; // fails silently
console.log(obj.testValue); // -> 17

delete obj.testValue; // deletion still works
console.log(obj.testValue); // -> undefined