const http = require('http');

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
  
    if (url[1] === 'authors') {
        if (request.method === 'GET') {
            response.end("Andrew");
            return;
        }
    }

    response.statusCode = 404;
    response.end();
});

server.listen(3000, "localhost", () => {
    console.log(`Server running at http://localhost:3000/`);
});