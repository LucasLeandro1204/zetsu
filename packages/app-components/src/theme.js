const { deepEqual } = require('assert');

const theme = {
  button: {

    /**
     * Default classes.
     * Can be a string (mapped to root prop) or object (many elements + root)
     */
    classes: 'px-3 py-2 flex items-center rounded-sm text-gray-800 bg-gray-100 hover:shadow disabled:opacity-50 disabled:cursor-not-allowed',

    /**
     * Button states.
     * Their values are merged with default "classes" values.
     * Can be a string or object (many elements)
     */
    states: {
      primary: 'bg-green-300 focus:bg-green-200 text-white',
      secondary: 'bg-blue-300 focus:bg-blue-200 text-white',
      link: 'bg-transparent text-blue-400 underline active:text-blue-300',
    },
  },

  /**
   * Button without padding.
   */
  buttonFlat: {
    extends: 'button',
    classes: 'p-0',
  },

  /**
   * Button with icon.
   */
  buttonIcon: {
    extends: 'button',

    classes: {
      /**
       * Overwrite button root classes.
       * Remove padding.
       */
      root: '',

      /**
       * Icon classes.
       */
      icon: '',
    },
  },
};

const resolveThemeComponent = (theme, component, state) => {
  //
};

deepEqual(
  resolveThemeComponent(theme),
  {

  },
);
