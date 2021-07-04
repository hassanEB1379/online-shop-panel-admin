import { createMuiTheme } from '@material-ui/core';
import overrides from './overrides';
import shadows from './shadows';

export const theme = createMuiTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazir',
    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
    },
    caption: {
      fontSize: 14,
    },
  },
  overrides,
  shadows,
});
