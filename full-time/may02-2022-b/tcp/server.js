const net = require('net');
const port = 12345

const server = net.createServer();

let connections = [];

server.on('connection', (connection) => {
    console.log('A new client has connected');
    connections.push(connection);
    connection.write('Hello there!')

    connection.on('data', (messageFromClient) => {
        console.log("Client says: ", messageFromClient.trim())

        if (messageFromClient.startsWith('setName:')) {
            const name = messageFromClient.split(' ')[1];
            const trimmedName = name ? name.trim() : name
            return connection.username = trimmedName;
        }

        for (const con of connections) {
            if(con !== connection){
                con.write(`${connection.username} says: ${messageFromClient.trim()}`);
            }
        }
    })

    // Handle disconnecting clients so server doesn't crash
    connection.on('close', () => {
        filteredConnections = connections.filter(ele => ele !== connection)
        connections = filteredConnections
        console.log(connections)
    })

    connection.setEncoding('utf-8')
})

server.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})