import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';
import { typography, overrides, shadows } from 'theme';

const SetThemeNameContext = createContext();
const ThemeNameContext = createContext();

export const useSetThemeName = () => useContext(SetThemeNameContext);
export const useThemeName = () => useContext(ThemeNameContext);

export const ThemeProvider = ({ children }) => {
  const getThemeFromLs = localStorage.getItem('theme');

  const [themeName, setThemeName] = useState(getThemeFromLs);

  const theme = createMuiTheme({
    direction: 'rtl',
    typography,
    overrides,
    shadows,
    palette: {
      type: themeName,
      primary: {
        light: '#ff999c',
        main: '#ff8084',
        dark: '#e76166',
        contrastText: '#fff',
      },
    },
  });

  // save new theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', themeName);
  }, [themeName]);

  return (
    <ThemeNameContext.Provider value={themeName}>
      <SetThemeNameContext.Provider value={setThemeName}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </SetThemeNameContext.Provider>
    </ThemeNameContext.Provider>
  );
};
