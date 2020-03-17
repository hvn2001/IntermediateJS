onRequest((request, response) =>
    readFile(request.fileToRead, data =>
        writeFile(request.fileToWrite, data, status =>
            response.send(status)
        )
    )
);

onRequest((request, response) => {
    try {
        readFile(request.fileToRead, data =>
            writeFile(request.fileToWrite, data, status =>
                response.send(status)
            )
        );
    } catch (err) {
        console.log(err);
        response.send(err);
    }
});

// Promises - not Handling
onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(data => writeFile(request.fileToWrite, data))
        .then(status => response.send(status))
);


// Error Handling

// Working Fine
onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(
            data => writeFile(request.fileToWrite, data),
            error => {
                console.log('Error when reading file:', error);
                return 'Failed';
            })
        .then(
            status => response.send(status),
            error => {
                console.log('Error when writing to file:', error);
                response.send(error);
            }
        )
);

// Error Thrown
onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(
            data => writeFile(request.fileToWrite, data), // the case where something goes wrong, error starts
            error => {
                console.log('Error when reading file:', error);
                return 'Failed';
            })
        .then(
            status => response.send(status),
            error => {
                console.log('Error when writing to file:', error);
                response.send(error);
            }
        )
);
// Error when writing to file: Error: File not found
/*An error is thrown during the writeFile process on line 4.
This error cascades down to the next .then's error handler on line 11, skipping the callback on line 10.
* */

// Error Handling when Promisifying
onRequest((request, response) => {
    const readFilePromise = new Promise((resolve, reject) => {
        readFile(request.fileToRead, (data, err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    });

    readFilePromise
        .then(
            data => writeFile(request.fileToWrite, data),
            error => {
                console.log('Error when reading file:', error);
                return 'Failed';
            })
        .then(
            status => response.send(status),
            error => {
                console.log('Error when writing to file:', error);
                response.send(error);
            }
        );
});

// .catch
onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(data => writeFile(request.fileToWrite, data))
        .then(status => response.send(status))
        .catch(error => {
            console.log('Caught error:', error);
            response.send(error);
        })
);
/*
An error is thrown on line 2.
Neither of the .thens on lines 3 or 4 are called.
 The engine goes immediately to the .catch method.
* */