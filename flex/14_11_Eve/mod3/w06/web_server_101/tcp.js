const net = require('net');
const port = 3000;

const server = net.createServer();

server.on('connection', (connection) => {
    connection.write('hello world');
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});