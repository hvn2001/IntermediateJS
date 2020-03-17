/*onRequest(function(request, response) {
    readFile(request.fileToRead, function(data) {
        writeFile(request.fileToWrite, data, function(status) {
            response.send(status);
        });
    });
});*/

// ES2015 arrow functions.
onRequest((request, response) =>
    readFile(request.fileToRead, data =>
        writeFile(request.fileToWrite, data, status =>
            response.send(status)
        )
    )
);

// Promises
onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(data => writeFile(request.fileToWrite, data))
        .then(status => response.send(status))
);

// Promisifying
onRequest((request, response) => {
    const readFilePromise = new Promise(resolve => {
        readFile(request.fileToRead, data => resolve(data));
    });

    readFilePromise
        .then(data => writeFile(request.fileToWrite, data))
        .then(status => response.send(status));
});
/*
We can promisify a non-Promise using the Promise constructor.
Promise takes in a callback, which itself takes in a callback parameter resolve.
We want to set up the callback we provide to Promise such that it calls its resolve parameter when it has the data it needs
->So, after the readFile operation is complete, we want to call resolve with the data we get out of it.
So, after the readFile operation is complete, we want to call resolve with the data we get out of it.
* */