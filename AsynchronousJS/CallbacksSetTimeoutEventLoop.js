function printCharacters() {
    console.log('Logged!');
}

setTimeout(printCharacters, 1000);
// (After one second:) Logged!

/*
 setTimeout throws our callback on the event loop.
 When the engine is idle and the amount of time we specified has passed, it’ll run our callback.
* */