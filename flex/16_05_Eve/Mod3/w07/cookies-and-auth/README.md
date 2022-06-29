# Mod03W07 - HTTP Cookies & User Authentication

### To Do

- [x] HTTP and cookies
- [x] Render pages differently based on language preference
- [x] Register user with email and password

### HTTP

- request/response cycle
- request contains a verb and a path (GET /urls)
- response must contain a status code; may or may not contain a body
- is a stateless protocol which means it is not required to remember any previous communication

### Cookies

- Allow us to store information about a user between HTTP requests
- Stored as key/value pairs in the client's browser
- Are passed to the server with every HTTP request
- Usually used to store unique value that identifies a particular user
- Domain specific ip address/port
