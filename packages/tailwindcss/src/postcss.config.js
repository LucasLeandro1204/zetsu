import { TAILWIND_CONFIG_PATH } from './server.js';

export const config = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {
      config: TAILWIND_CONFIG_PATH,
    },
  },
};
