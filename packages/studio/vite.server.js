const { createServer } = require('vite');
const { middleware } = require('@zetsu/tailwindcss/src/server');

createServer({
  configureServer: [
    middleware,
  ],
}).listen(3000);

console.log('[studio] - Vite dev server running at http://localhost:3000');
