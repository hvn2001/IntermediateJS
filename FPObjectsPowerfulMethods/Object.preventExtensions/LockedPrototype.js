const obj = {};
Object.preventExtensions(obj);
Object.setPrototypeOf(obj, {});
//-> TypeError: #<Object> is not extensible