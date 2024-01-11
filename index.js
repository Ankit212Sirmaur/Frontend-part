const http = require('http');
const content = require('./Route/route')

const server = http.createServer(content);

server.listen(3000);