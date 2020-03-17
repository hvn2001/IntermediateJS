function wait(secondsToWait) {
    return new Promise(resolve => {
        setTimeout(
            () => resolve(`Resolved after ${secondsToWait} seconds`),
            secondsToWait * 1000
        );
    });
}

async function fn() {
    console.log('Beginning fn');

    const result = await wait(2); // the crux of async/await; until it’s done, fn just sits there
    console.log(result);

    console.log('Ending fn');
}

fn();