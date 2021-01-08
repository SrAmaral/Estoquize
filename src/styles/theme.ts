export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    regular: 500,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.6 rem',
      huge: '5.2rem'
    }
  },
  colors: {
    background: '#EEEFF3',
    blue: '#619AF9',
    title: '#343539',
    grey: '#B9B9BB',
    inativegrey: '#C4C4C4',
    white: '#FAFAFA',
    subtitle: '#575960',
    green: '#52BE80',
    yellow: '#F5D470',
    red: '#ED7878',
    inputbg: '#FCFCFC',
    inputbgf: '#EFF0F6'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
