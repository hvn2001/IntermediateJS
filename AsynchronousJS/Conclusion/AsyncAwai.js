onRequest(async (request, response) => {
    try {
        const readFileData = await readFile(request.fileToRead);
        const writeStatus = await writeFile(request.fileToWrite, readFileData);
        response.send(writeStatus);
    } catch (err) {
        console.log('Caught error:', err);
        response.send(err);
    }
});
/*
using it incorrectly can lead to functions that are unnecessarily slow
A programmer who isn’t careful may make function calls in SERIES when they should really be made in PARALLEL

async/await is really just a wrapper around Promises
It provides an alternative, easier syntax to deal with asynchronous code.
* */