const standardFnAdd = function (num1, num2) {
    return num1 + num2;
}

const arrowFnAdd = (num1, num2) => num1 + num2;

console.log(standardFnAdd(2, 5)); // -> 7
console.log(arrowFnAdd(2, 5)); // -> 7


console.log("-----------Return an object----------");

/*
If we want to return an object from the arrow function, however, we need to wrap it in parentheses or
else the arrow function reads it as a function body and doesn’t do what we expect. These two are equivalent.
* */

function createObject(prop) {
    return {prop: prop};
}

const arrowCreateObject = (prop) => ({prop});