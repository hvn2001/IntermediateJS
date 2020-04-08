request = {
    fileToRead: 'readFrom.txt',
    fileToWrite: 'writeTo.txt'
};

onRequest(function(request, response) {
    readFile(request.fileToRead, function(data) {
        writeFile(request.fileToWrite, data, function(status) {
            response.send(status);
        });
    });
});