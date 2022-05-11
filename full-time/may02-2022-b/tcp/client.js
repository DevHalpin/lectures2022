const net = require('net');

const config = {
    host: '6.tcp.ngrok.io',
    port: 12597
}

const client = net.createConnection(config);

client.on('data', (messageFromServer) => {
    console.log('Server says:', messageFromServer);
    
})

client.setEncoding('utf-8');

process.stdin.on('data', (data) => {
    client.write(data)
})