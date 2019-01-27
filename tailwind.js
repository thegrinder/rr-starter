const plugins = require('tailwindcss-base-plugins');

module.exports = {
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fontWeights: {
    4: 400,
    7: 700,
  },
  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  borderRadius: {
    0: '0',
    1: '.125rem',
    2: '.25rem',
    3: '.5rem',
    4: '1rem',
    pill: '9999px',
  },
  width: {
    auto: 'auto',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
    32: '8rem',
    48: '12rem',
    64: '16rem',
    full: '100%',
  },
  height: {
    auto: 'auto',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    24: '6rem',
    32: '8rem',
    48: '12rem',
    64: '16rem',
    full: '100%',
    screen: '100vh',
  },
  minWidth: {
    0: '0',
    full: '100%',
  },
  minHeight: {
    0: '0',
    full: '100%',
    screen: '100vh',
  },
  maxWidth: {
    xs: '20rem',
    sm: '30rem',
    md: '40rem',
    lg: '50rem',
    xl: '60rem',
    full: '100%',
  },
  maxHeight: {
    full: '100%',
    screen: '100vh',
  },
  spacing: {
    auto: 'auto',
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
  },
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
  },
  opacity: {
    0: '0',
    100: '1',
  },
  modules: {
    // tailwind config OK
    flexbox: ['responsive'],
    height: [],
    leading: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    overflow: [],
    position: [],
    tracking: [],
    width: [],
    zIndex: [],

    // tailwind config not OK - styles covered by plugins
    borderRadius: false,
    borderStyle: false,
    borderWidths: false,
    display: false,
    fontWeights: false,
    lists: false,
    opacity: false,
    textAlign: false,
    textStyle: false,
    verticalAlign: false,
    padding: false,
    margin: false,
    negativeMargin: false,

    // disabled
    appearance: false,
    backgroundAttachment: false,
    backgroundColors: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderColors: false,
    cursor: false,
    float: false,
    fonts: false,
    pointerEvents: false,
    resize: false,
    shadows: false,
    svgFill: false,
    svgStroke: false,
    textColors: false,
    textSizes: false,
    userSelect: false,
    visibility: false,
    whitespace: false,
  },

  plugins,

  options: {
    prefix: '',
    important: false,
    separator: ':',
  },
};