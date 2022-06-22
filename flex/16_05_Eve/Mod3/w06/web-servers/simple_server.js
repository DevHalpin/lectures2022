const http = require("http");
const port = 3000;

const server = http.createServer();

server.on("request", (request, response) => {
  console.log("I am the method", request.method);
  console.log("I am the url", request.url);

  if (request.method === "GET" && request.url === "/about") {
    response.write("This is the about page");
  } else if (request.method === "GET" && request.url === "/home") {
    response.write("This is the home page");
  } else {
    response.write("This is not a page");
  }
  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
