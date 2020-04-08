const add10 = function (num1) {
    return num1 + 10;
}

const arrowAdd10 = num1 => num1 + 10;

console.log(add10(2)); // -> 12
console.log(arrowAdd10(2)); // -> 12


console.log("-----------Callbacks----------");
const arr = [{prop: 'abc'}, {prop: 'def'}];
const props = arr.map(function (obj) {
    return obj.prop;
});
console.log(props); // -> [ 'abc', 'def' ]


const propsArrow = arr.map(obj => obj.prop);
console.log(propsArrow); // -> [ 'abc', 'def' ]