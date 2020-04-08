function logThisAndArguments(arg1, arg2) {
    console.log(this);
    console.log(arg1);
    console.log(arg2);
}

const obj = {val: 'Hello!'};

logThisAndArguments('First arg', 'Second arg');
// -> Window {frames: Window, postMessage: ƒ, …}
// -> First arg
// -> Second arg

logThisAndArguments.call(obj, 'First arg', 'Second arg');
// -> { val: 'Hello!' }
// -> First arg
// -> Second arg