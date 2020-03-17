/*
This function is similar to Object.preventExtensions,
but goes a bit further. All of the same limitations of Object.preventExtensions apply.
* */
const obj = {
    prop: 49,
};

Object.seal(obj);

console.log(Object.isSealed(obj)); // -> true
console.log(Object.isExtensible(obj)); // -> false

obj.prop = 17; // works
console.log(obj); // -> { prop: 17 }

Object.defineProperty(obj, 'prop', {
    value: 24,
    enumerable: true,
    configurable: true,
    writable: true
}); // -> TypeError: Cannot redefine property: prop