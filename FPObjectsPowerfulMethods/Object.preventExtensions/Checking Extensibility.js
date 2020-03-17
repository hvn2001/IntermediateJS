const obj = {};

console.log(Object.isExtensible(obj)); // -> true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // -> false