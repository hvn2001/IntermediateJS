const obj = {
    innerObj: {}
};

Object.preventExtensions(obj);

obj.innerObj.prop = 8; // succeeds
console.log(obj); // -> { innerObj: { prop: 8 } }