function logThis() {
    console.log(this);
}

const obj = {val: 'Hello!'};

logThis(); // -> Window {frames: Window, postMessage: ƒ, …}
logThis.call(obj); // -> { val: 'Hello!' };