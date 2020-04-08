const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: false,
    configurable: false,
    enumerable: true
});

obj.testValue = 22; // fails silently
console.log(obj.testValue); // -> 17

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: false,
    enumerable: true
}); // -> TypeError: Cannot redefine property: testValue