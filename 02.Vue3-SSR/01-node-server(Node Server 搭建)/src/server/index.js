let express = require("express");
let server = express();

server.get("/", (req, res) => {
  res.send(
    `
   <h1>hello world  Hello Node Server 20000</h1>
    <p>这是一个node服务器</p> 
    `
  );
});

const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || "localhost";

server.listen(PORT, HOST, () => {
  console.log(`start node server on http://${HOST}:${PORT} ~`);
});
