const http = require('http');
const port = 3000;

const server = http.createServer((request, response) => {
   const route = `${request.method} ${request.url}`;

   switch(route) {
    case 'GET /':
        response.end('This is a GET request to "/"');
        break;
    case 'GET /users':
        response.end('This is a GET request to "/users"');
        break;
    default:
        response.end('Route not found');
   }
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
})