const obj = {
    prop: 'value'
};

Object.freeze(obj);
console.log(Object.isFrozen(obj)); // -> true
console.log(Object.isSealed(obj)); // -> true
console.log(Object.isExtensible(obj)); // -> false

obj.prop = 4; // fails
console.log(obj); // -> { prop: 'value' }

delete obj.prop; // fails
console.log(obj); // -> { prop: 'value' }

obj.nextProp = 8; // fails
console.log(obj); // -> { prop: 'value' }