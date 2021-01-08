const { join } = require('path');

/**
 * App components path.
 */
const COMPONENTS_PATH = join(__dirname);

/**
 * Vite middleware.
 */
const middleware = ({
  watcher,
}) => {
  console.info('[app-components] watch components files');

  watcher.add(
    COMPONENTS_PATH
  );
};

module.exports = {
  middleware,
  COMPONENTS_PATH,
};
