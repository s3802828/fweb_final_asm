const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { SERVER_PORT } = process.env;

// server listening 
server.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
