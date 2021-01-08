import { createServer as viteCreateServer } from 'vite';
import { middleware as tailwindMiddleware } from '@zetsu/tailwindcss/server';
import { middleware as componentsMiddleware } from '@zetsu/app-components/server';

export const createServer = (pkg, port) => {
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
