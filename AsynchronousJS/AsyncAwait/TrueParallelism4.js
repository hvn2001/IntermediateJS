function randomWait() {
    const seconds = Math.random() * 5;

    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Resolved after ${seconds.toFixed(2)} seconds`),
            seconds * 1000
        );
    });
}

async function fn() {
    const result1 = randomWait();
    const result2 = randomWait();

    console.log(result1); // -> Promise { <pending> }
    const r1Resolved = await result1;
    console.log('1st call:', r1Resolved);

    console.log(result2); // -> Promise { <pending> }
    const r2Resolved = await result2;
    console.log('2nd call:', r2Resolved);
}

fn();
/*
We now have a bit of a problem. There is a 50% chance that result1 will resolve after result2.
This means that half the time, result2 will finish while the function is executing line 17.
Instead of seeing the printout as soon as it’s available, we now have to wait.

In other words, line 18 will always print before line 24, even if line 24’s work is completed earlier.
Half the time, line 24 will be forced to wait longer than it has to.
* */