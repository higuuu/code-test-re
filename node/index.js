const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const endpoint = req.url;
  if (endpoint === "/start") {
    fs.readFile("./index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (endpoint === "/api") {
    // ここに処理を記述してください。
    res.statusCode = 200;
    console.log("res",req)
    console.log(req.data)
    res.end(`{ "data": ${req.data} }`);
  }
});
server.listen(8080);
