const { join } = require('path');

/**
 * Tailwind config path.
 */
const config = join(__dirname, './tailwind.js');

/**
 * Postcss config.
 */
const postcss  = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {
      config,
    },
  },
};

/**
 * Vite middleware.
 */
const middleware = ({
  watcher,
}) => {
  console.info('[tailwindcss] watch Tailwind config file');

  watcher.add(
    config
  );
};

module.exports = {
  postcss,
  middleware,
};
