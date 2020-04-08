const arr = ['abc', 'def'];

Object.preventExtensions(arr);

arr[1] = 24; // succeeds
arr[2] = 88; // fails
console.log(arr); // -> [ 'abc', 24 ]

// Instead of failing silently, attempts to push, pop, shift, and unshift will throw an error.
// arr.push('ghi');
// -> TypeError: Cannot add property 2, object is not extensible