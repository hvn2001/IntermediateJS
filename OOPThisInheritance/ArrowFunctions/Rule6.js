const obj = {
    value: 'abc',
    createArrowFn: function () {
        return () => console.log(this);
    }
};
// If the function is an ES2015 arrow function, it ignores all the rules above and
// receives the this value of its surrounding scope at the time it’s created.
const arrowFn = obj.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }