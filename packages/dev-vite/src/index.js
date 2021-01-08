const { createServer: viteCreateServer } = require('vite');
const { middleware: tailwindMiddleware } = require('@zetsu/tailwindcss/src/server');
const { middleware: componentsMiddleware } = require ('@zetsu/app-components/src/server');

const createServer = (pkg, port) => {
  const server = viteCreateServer({
    configureServer: [
      tailwindMiddleware,
      componentsMiddleware,
    ],
  });

  server.listen(port);

  console.log(`[${pkg}] - Vite dev server running at http://localhost:${port}`);

  return server;
};

module.exports = {
  createServer,
};
