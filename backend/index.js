const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const mongoose = require('mongoose')
const { MONGO_URI } = process.env;

const { SERVER_PORT } = process.env;
mongoose.connect(MONGO_URI)

  .then(() => server.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}. Database successfully connected`);
  }))
  .catch((error) => console.log(error.message))

