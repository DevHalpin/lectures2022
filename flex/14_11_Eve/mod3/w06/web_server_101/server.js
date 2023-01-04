const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(request.url)
    console.log(request.method)
    response.end('hello world!');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})