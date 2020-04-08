const obj = {
    prop: 49,
};

Object.preventExtensions(obj);

for (let i in obj) {
    console.log(i); // -> prop
}

/*
Property attributes (configurable, writable, enumerable) can still be changed through Object.defineProperty.
* */
Object.defineProperty(obj, 'prop', {
    value: 17,
    enumerable: false,
    configurable: false,
    writable: false
}); // succeeds

obj.prop = 9; // fails
console.log(obj.prop); // -> 17

for (let i in obj) {
    console.log(i); // -> Ø
}