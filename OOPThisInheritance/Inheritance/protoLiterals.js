console.log(
    Object.getPrototypeOf({}) === Object.prototype
); // -> true

console.log(
    Object.getPrototypeOf([]) === Array.prototype
); // -> true

console.log(
    Object.getPrototypeOf(function fn() {
    })
    === Function.prototype
); // -> true