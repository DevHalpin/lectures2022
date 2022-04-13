# W02D03 - Networking with TCP and HTTP

### To Do
- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] HTTP fundamentals
- [ ] TCP demo

### Client and Servers
- The majority of networking is made up of server/client connections
- In general, servers have information and clients want information

### Internet Protocol

- Uniquely identifies the machine on a network (think "street address")
- Come in two flavours: IPv4 and IPv6
    - 192.168.1.12
    - 2001:db8:3333:4444:5555:6666:7777:8888
- The port identifies the application (think "apartment number")
- We have 65,535 ports to choose from (per internet connection)
- Popular ports:
    - HTTP: 80
    - HTTP: 443
    - FTP: 21
    - SMTP: 25
    - SSH: 22
    - Postgres: 5432

### Transport Layer Protocols
    - Break data into packets to be sent over the network layer
    - Give each packet a header with origin and destination
    - UDP: User Datagram Protocol
        - Smaller header size (8 bytes) which results in smaller packet sizes
        - Connectionless ie. there is no need to establish or maintain a connection
        - No error recovery (any corrupted packets are discarded)
        - Packets can arrive in any order
        - Useful for streaming and other low latency applications
    - TCP: Transportation Control Protocol
        - Larger header size (20 bytes)
        - Requires a connection (3-way handshake)
        - Corrupted packets are reported to the server and are re-sent
        - Packets arrive in order
        - Useful when guaranteed communication is needed

### HTTP
    - HyperText Transfer Protocol
    - Built on top of the TCP layer
    - Protocol for how message are formatted and transmitted
    - Call/Request and response communication
    - State-less: no memory of any previous communication
    - Routes to resources are made up of method (verb) and path
    - METHODS: GET, POST, PUT, PATCH, DELETE
    - Get - Gets information 
    - Post - Posts information 
    - Paths: '/users', '/dinosaurs/7'
    - Returns status codes for each communication (eg. 200, 202, 302, 404, 500)
    - Response headers contain information about the respons such as media type and content size
    - Response body contains the content (JSON, html, etc)


