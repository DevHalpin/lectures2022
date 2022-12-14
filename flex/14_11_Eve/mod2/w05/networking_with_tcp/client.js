const net = require('net');

const config = {
    host: '4.tcp.ngrok.io',
    port: 14874
}

const client = net.createConnection(config);

client.setEncoding('utf8');

process.stdin.on('data', (data) => {
    client.write(data);
});

// client.write('hey hey hey');


client.on('data', (messageFromServer) => {
    console.log(messageFromServer);
});