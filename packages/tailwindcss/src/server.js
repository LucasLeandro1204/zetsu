const { join } = require('path');

/**
 * Tailwind config path.
 */
const TAILWIND_CONFIG_PATH = join(__dirname, './tailwind.config.js');

/**
 * Vite middleware.
 */
const middleware = ({
  watcher,
}) => {
  console.info('[tailwindcss] watch Tailwind config file');

  watcher.add(
    TAILWIND_CONFIG_PATH
  );
};

module.exports = {
  middleware,
  TAILWIND_CONFIG_PATH,
};
