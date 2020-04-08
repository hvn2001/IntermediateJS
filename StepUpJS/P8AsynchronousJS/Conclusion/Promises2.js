onRequest((request, response) =>
    readFile(request.fileToRead)
        .then(data => writeFile(request.fileToWrite, data))
        .then(status => response.send(status))
        .catch(err => {
            console.log('Caught error:', err);
            response.send(err);
        })
);
/*
A problem with Promises is the amount of time and effort they take to learn.
A senior JavaScript engineer can pick up a concept like this in minutes and use it successfully,
but for novices, it can often prove a difficult mechanism to acclimate to,
due to the nature of asynchronous code and callbacks in general.
* */