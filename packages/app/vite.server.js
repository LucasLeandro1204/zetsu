const { createServer } = require('vite');
const { middleware } = require('@zetsu/tailwindcss');

createServer({
  configureServer: [
    middleware,
  ],
}).listen(3000);

console.log('zetsu/app - Vite dev server running at http://localhost:3000');
