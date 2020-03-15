function fn() {
    console.log('Executing fn');
}

fn.func = function () {
    console.log('Executing func');
}

fn(); // -> Executing fn
fn.func(); // -> Executing func

console.log('/////////////');

function fnGenerator() {
    return function () {
        console.log('Ran the inner function');
    }
}

const fnReturned = fnGenerator();
console.log(fnReturned); // -> [Function]
fnReturned(); // -> Ran the inner function
console.log('/////////////');

function fnCaller(fn) {
    fn();
}

function log() {
    console.log('Calling log');
}

fnCaller(log); // -> Calling log


console.log('/////////////');

function multiply(x, y) {
    return x * y;
}

function callMultiply(fn, val1, val2) {
    return multiply(val1, val2);
}
callMultiply(multiply, 4, 5)
callMultiply(multiply, 10, 20)