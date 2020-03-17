const obj = {
    prop: 'value',
};

Object.preventExtensions(obj);

obj.nextProp = 8; // fails
console.log(obj); // -> { prop: 'value' }

obj.prop = 4; // succeeds
console.log(obj); // -> { prop: 4 }

delete obj.prop; // succeeds
console.log(obj); // -> {}

obj.prop = 17; // since the property no longer exists, fails
console.log(obj); // -> {}