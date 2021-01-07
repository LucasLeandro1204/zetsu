const { createServer: viteCreateServer } = require('vite');
const { middleware } = require('@zetsu/tailwindcss/src/server');

const createServer = (pkg, port) => {
  const server = viteCreateServer({
    configureServer: [
      middleware,
    ],
  });

  server.listen(port);

  console.log(`[${pkg}] - Vite dev server running at http://localhost:${port}`);

  return server;
};

module.exports = {
  createServer,
};
