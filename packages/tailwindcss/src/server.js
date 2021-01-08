import { join, resolve} from 'path';

/**
 * Tailwind config path.
 */
export const TAILWIND_CONFIG_PATH = join(resolve(), './tailwind.config.js');

/**
 * Vite middleware.
 */
export const middleware = ({
  watcher,
}) => {
  console.info('[tailwindcss] watch Tailwind config file');

  watcher.add(
    TAILWIND_CONFIG_PATH
  );
};
