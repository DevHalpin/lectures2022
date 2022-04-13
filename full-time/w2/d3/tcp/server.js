const net = require('net');
const port = 54321;

const server = net.createServer();

const connections = [];

server.on('connection', (connection) => {
    console.log("A new client has connected")

    connection.write("Hello there")

    connections.push(connection);

    connection.on('data', (messageFromClient) => {
        if (messageFromClient.startsWith('setName:')) {
            const fullName = messageFromClient.split(' ');
            const name = fullName[1] ? fullName[1].trim() : "Client"
            return connection.username = name
        }
        if (!connection.username) {
            connection.username = "Client"
        }
        console.log(`${connection.username } says: ${messageFromClient.trim()}`)

        for (const con of connections) {
            
            if (con !== connection && !con._writableState.finished) {
                con.write(`${ connection.username } says: ${messageFromClient.trim()}`);
            }
        }
    });

    connection.setEncoding('utf-8');

})



server.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})