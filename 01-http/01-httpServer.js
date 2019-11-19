const http = require('http');

const port = 3000, hostname = 'localhost'         //宣告埠號、主機名稱

const server = http.createServer((request, response) => {
  console.log('url:', request.url);
  console.log('  method:', request.method);
  console.log('  headers', request.headers);
  response.statusCode = 200;                      // 回傳200=成功
  response.setHeader('Content-Type', 'text/plain');
  response.write('Hello World\n');
  response.end()
});