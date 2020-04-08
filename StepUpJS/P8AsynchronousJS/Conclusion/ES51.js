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
/*
it gets very hairy very quickly
The only time I can recommend using ES5 code is with a platform that doesn’t support ES2015+.
As time goes on, these become more and more rare, so it shouldn’t be an issue.
* */