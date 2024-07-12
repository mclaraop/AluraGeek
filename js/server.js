const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../db.json')); // Adjusted path to db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/produtos', router);

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log("JSON Server is running on port ${port}");
});