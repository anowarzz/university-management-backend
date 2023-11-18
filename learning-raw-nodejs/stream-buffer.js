const http = require("http");

// creating a server using raw node js
const server = http.createServer();
const fs = require("fs");

// listener
server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    // streaming file reading
    const readableStream = fs.createReadStream(
      process.cwd() + "/text/read.txt"
    );

    // streaming data
    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
     
    // ending streaming
    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("The streaming is over!");
    });

    // on error while streaming
    readableStream.on("error", (error) => {
      console.log(error);
      res.statusCode = 500;
      res.end("Something went wrong!");
    });
  }
});

server.listen(5000, () => {
  console.log(`server is running on port 5000`);
});
