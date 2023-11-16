const http = require("http");

// creating a server using raw node js

const server = http.createServer();
const fs = require("fs");

// listener
server.on("request", (req, res) => {
  if ((req.url === "/read-file", req.method === "GET")) {
  }

  // streaming file reading
  const readableStream = fs.createReadStream(process.cwd() +"/text/read.txt");

  readableStream.on("data", (buffer) => {
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.end("Hello from a place where snow falls like love");
  });
});

server.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
