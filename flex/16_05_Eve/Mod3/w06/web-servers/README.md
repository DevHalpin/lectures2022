# Mod3W06 - Web Servers 101

### To Do

- [x] Web Servers
- [x] Express
- [x] Middleware

### Servers

- server - has data
- client - wants data
- web servers
  - server up content related to the web (HTML, CSS, JS, video, image)
  - communicates via HTTP

### HTTP

- HyperText Transfer Protocol
- TCP - medium of communication
- IP - giving the exact spot where something lives (address)
- Request/Response process

### Request

- host
- port 65,535 to choose from
- verb/method - tells the server what you want to do
  - GET - retrieve something
  - POST - send something
- action/url - tells the server what you want to do it to
- everything after domain:port
- http://localhost:3000/u/30h5xg

Move up! You ded!
Client <========= TCP =======> Server

Request
Client <========= TCP/HTTP =======> Server

// creating a TCP server
const net = require('net');
const port = 1234;

const server = net.createServer();

server.on('connection', (connection) => {
connection.write('hello there');
});

server.listen(port, () => {
console.log(`server is listening on port ${port}`);
});

// create a HTTP server
const http = require('http');
const port = 3000;

const server = http.createServer();

server.on('request', (request, response) => {
request.write('hello there');
});

server.listen(port, () => {
console.log(`server is listening on port ${port}`)
})

### Express.js

Koa
Hapi
Restify

### Middleware

- not unique to express or JS
- code the runs between the request and the response
- typicaly used for parsing

- header => cookies

Request ======> Callback =====> Response

               cookie-parser     body-parser

Request =====> Middleware =====> Middleware ====> Callback =====> Response
req.cookies req.body res.send()

### Template Engines and EJS

A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
