function wait(secondsToWait) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Resolved after ${secondsToWait} seconds`),
            secondsToWait * 1000
        );
    });
}

async function fn() {
    const result1 = wait(1);
    const result2 = wait(2);

    console.log(result1); // -> Promise { <pending> }
    const r1Resolved = await result1;
    console.log(r1Resolved);
    // -> 1s after execution begins: "Resolved after 1 seconds"


    console.log(result2); // -> Promise { <pending> }
    const r2Resolved = await result2;
    console.log(r2Resolved);
    // -> 2s after execution begins: "Resolved after 2 seconds"
}
fn();
//  we can also make calls in parallel. This means that two or more asynchronous function calls will be happening simultaneously.
/*
Since we didn’t use await, the function will continue to run.
The function call on line 11 will start and while our function waits for the Promise to resolve,
it’ll continue and start the function call on line 12.
* */