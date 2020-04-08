function wait(secondsToWait) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Resolved after ${secondsToWait} seconds`),
            secondsToWait * 1000
        );
    });
}

async function fn() {
    const result1 = await wait(1);
    console.log(result1); // -> 1s after execution begins: "Resolved after 1 seconds"

    const result2 = await wait(2);
    console.log(result2); // -> 3s after execution begins: "Resolved after 2 seconds"
}

fn();
// Types of Asynchronous Calls

// The second will print two seconds after the first one prints.
// The total time the function takes will be 3 seconds.

/*
The function takes a total of 3 seconds. On line 11, fn will pause for 1 second and then print the result.
It will wait for 2 more seconds on line 14 and then print the result.
Because the two async calls inside fn proceed in a linear fashion, we say that the calls are made in series.
* */


