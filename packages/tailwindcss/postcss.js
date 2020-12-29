const {
  TAILWIND_CONFIG_PATH: config,
} = require('./src/server');

module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {
      config,
    },
  },
};
