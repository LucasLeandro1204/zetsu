import 'vite/dynamic-import-polyfill';
import http from 'http';
import test from './test';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(test());
  res.end();
}).listen(3003);
