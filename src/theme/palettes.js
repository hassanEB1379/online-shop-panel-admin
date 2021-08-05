import { red, blue, purple } from '@material-ui/core/colors';

export const palettes = {
  dark: {
    type: 'dark',
    primary: {
      light: '#ff999c',
      main: '#ff8084',
      dark: '#e76166',
      contrastText: '#fff',
    },
    text: {
      hover: '#ff8084',
    },
  },
  light: {
    type: 'light',
    primary: {
      light: '#ff999c',
      main: '#ff8084',
      dark: '#e76166',
      contrastText: '#fff',
    },
    text: {
      hover: '#ff8084',
    },
  },
  blue: {
    type: 'light',
    primary: blue,
    background: {
      sidebar: blue['A700'],
    },
    text: {
      sidebar: '#fff',
      hover: '#fff',
    },
  },
  red: {
    type: 'light',
    primary: red,
    background: {
      sidebar: red['A400'],
    },
    text: {
      sidebar: '#fff',
      hover: '#fff',
    },
  },
  purple: {
    type: 'light',
    primary: purple,
    background: {
      sidebar: purple[500],
    },
    text: {
      sidebar: '#fff',
      hover: '#fff',
    },
  },
};
