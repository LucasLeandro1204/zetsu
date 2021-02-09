module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        red: {
          '100': '#0F0',
        },
      },

      ringWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },

      ringOffsetWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
      },
    },
  },

  variants: {
    extend: {
      ringWidth: [
        'hover',
      ],

      ringOpacity: [
        'hover',
      ],
    },
  },
};

