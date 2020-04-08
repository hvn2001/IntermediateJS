const obj = {x: 100};

Object.defineProperty(obj, 'testValue', {
    value: 17,
    writable: true,
    configurable: true,
    enumerable: false
});

// enumerable is set to false, so
// `testValue` won't show up here
for (const key in obj) {
    console.log(key); // -> x
}

console.log(obj.testValue); // -> 17