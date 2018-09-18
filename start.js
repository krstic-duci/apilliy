require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.APP_PORT || 3050, () => {
  console.log('Express server up and running...');
});
