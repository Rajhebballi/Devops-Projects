const http = require("http");

http.createServer((req, res) => {
  res.write("Hello Raj! ECS is running your container 🚀");
  res.end();
}).listen(8080);
