import { resolve } from 'path';

/**
 * App components path.
 */
export const COMPONENTS_PATH = resolve();

/**
 * Vite middleware.
 */
export const middleware = ({
  watcher,
}) => {
  console.info('[app-components] watch components files');

  watcher.add(
    COMPONENTS_PATH
  );
};
