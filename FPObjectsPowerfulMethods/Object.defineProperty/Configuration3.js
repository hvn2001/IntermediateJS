const obj = {};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: false,
    enumerable: true
});

obj.testValue = 22; // assignment works
console.log(obj.testValue); // -> 22

/*
Once we define a property and set configurable to false, there is only one configuration change allowed to the property.
We can still change writable from true to false. All other attempts to change configuration will result in an error.
* */
Object.defineProperty(obj, 'testValue', {
    writable: false,
    configurable: false,
    enumerable: true
}); // No error

obj.testValue = 35; // fails silently
console.log(obj.testValue); // -> 22