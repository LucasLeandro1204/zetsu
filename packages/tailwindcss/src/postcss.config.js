const { TAILWIND_CONFIG_PATH } = require('./server.js');

const config = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {
      config: TAILWIND_CONFIG_PATH,
    },
  },
};

module.exports = config;
