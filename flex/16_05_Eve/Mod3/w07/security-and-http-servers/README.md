# M03W07 - Security & Real World HTTP Servers

### To Do

- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

password (plain text) => hash password + salt => hash

### Encryption

- 2 way process
- plain text cookie => encryption algo => encrypted cookie => browser
- encrypted cookie => decryption algo => plain-text cookie => lookup user on server

cookies are set on the response object

we set plain text cookie on req.session, the middleware takes req.session, encrypts, and calls res.cookie('userId', 'asjdhasjkhdkajhdjkahda')

http://localhost:8765/protected

### HTTPS

HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
Encrypted using asymmetric cryptography which uses a public key and private key system
Public key is available to anyone who wants it and is used to encrypt the communication
Private key is only known to the reciever and is used for decrypting the communication

### REST

REpresentational State Transfer
the routes we use indicate the relationship of the underlying data
naming convention
RESTful

GET /retrieve-all-users GET /get-all-messages-from-db

Browse GET /cats
Read GET /cats/:id
Edit POST /cats/:id/edit
Add POST /cats
Delete POST /cats/:id/delete

Selectors/resources are always plural (eg. /resources, /users, /cats)
Actions are always singular (eg. /login, /register)

PUT
DELETE
PATCH

Browse GET /cats
Read GET /cats/:id
Edit PATCH /cats/:id
Add POST /cats
Delete DELETE /cats/:id
