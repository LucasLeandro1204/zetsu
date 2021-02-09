module.exports = {
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        red: {
          '100': '#0F0',
        },

        'darkest': '#000000',
        'darker': '#414141',
        'dark': '#525252',
        'primary': '#313131',
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

