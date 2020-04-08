console.log('-----------It creates shallow copies------------')
const obj1 = {obj1key: 'obj1val'};
const obj2 = {outerKey: {innerKey: 'val'}};

Object.assign(obj1, obj2);

console.log(obj1);
// -> { obj1key: 'obj1val', outerKey: { innerKey: 'val' } }

console.log(obj1.outerKey === obj2.outerKey); // -> true