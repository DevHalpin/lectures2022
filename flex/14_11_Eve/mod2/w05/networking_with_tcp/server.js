const net = require('net');

const port = 54321;

// create the tcp server
const server = net.createServer();

//array to hold connections
let connections = [];

// connection event listener
server.on('connection', (connection) => {
    console.log("A new client has connected ");

    connection.write('hello there!')

    connections.push(connection);

    connection.setEncoding('utf8');

    connection.on('data', (messageFromClient) => {
        console.log('Debug says: ', messageFromClient.trim());

        if (messageFromClient.startsWith('setName:')) {
            //const commandArray = messageFromClient.split(' ')
            // const name = commandArray[1];
            const name = messageFromClient.split(' ')[1];
            console.log(name)
            const trimmedName = name ? name.trim() : "Client";
            return connection.username = trimmedName;
        }

        for (const con of connections) {
            if (con !== connection) {
                con.write(`${connection.username} says: ${messageFromClient.trim()}`);
            }
        }
    });

    connection.on('close', () => {
        const filteredConnections = connections.filter(ele => ele !== connection)
        console.log('unfiltered connections length', connections.length);
        connections = filteredConnections;
        console.log('filter connections length ', filteredConnections.length);
    })

});

//start the server listening
server.listen(port, () => {
    console.log('listening on port ' + port);
});