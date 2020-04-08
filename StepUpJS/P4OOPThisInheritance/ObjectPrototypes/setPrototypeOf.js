const obj = {};
const protoObj = {};
Object.setPrototypeOf(obj, protoObj);
console.log(Object.getPrototypeOf(obj) === protoObj);
// -> true