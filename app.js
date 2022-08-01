const http = require("http");

function rqListener(req, res) {
  res.setHeader("content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello Naveen Rawat</h1></body>");
  res.write("<html>");
  res.end();
}
const server = http.createServer(rqListener);
server.listen(3000, function () {
  console.log("server started at 3000");
});
