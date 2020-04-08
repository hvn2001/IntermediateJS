function randomWait() {
    const seconds = Math.random() * 5;

    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Resolved after ${seconds.toFixed(2)} seconds`),
            seconds * 1000
        );
    });
}

function fn() {
    const result1 = randomWait()
        .then(result => console.log('1st call:', result));
    const result2 = randomWait()
        .then(result => console.log('2nd call:', result));
}

fn();
/*
no uses async/await -> this example here to show you the limits of async/await
Using await is fantastic when the tasks we’re trying to be accomplished are supposed to be sequential and the asynchronous function calls need to happen in series
If need TRUE PARALLELISM as in the function in this example, we need to go back to PROMISES.
* */