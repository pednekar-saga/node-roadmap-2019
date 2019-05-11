/**
 *
 * Creating Node server using http module
 */
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
   if (req.url === "/user") {
      res.write("This is user listing");
      res.end();
   }
});

/**
 *
 * Listening to the server on given PORT
 */
server.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
});
