import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { useEffect, useReducer, useContext, createContext } from 'react';
import { themeReducer, initialTheme, initFunc } from 'reducers/ThemeReducer';
import { typography, overrides, shadows } from 'theme';

const themeInfoContext = createContext();
const themeInfoDispatchContext = createContext();

export const useThemeInfo = () => useContext(themeInfoContext);
export const useThemeInfoDispatch = () => useContext(themeInfoDispatchContext);

export const ThemeProvider = ({ children }) => {
  const [themeInfo, dispatch] = useReducer(
    themeReducer,
    initialTheme,
    initFunc
  );

  const theme = createMuiTheme({
    direction: themeInfo.direction,
    typography,
    overrides,
    shadows,
    palette: {
      type: themeInfo.themeName,
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
    localStorage.setItem('theme', JSON.stringify(themeInfo));
  }, [themeInfo]);

  useEffect(() => {
    document.documentElement.dir = themeInfo.direction;
  }, [themeInfo.direction]);

  return (
    <themeInfoContext.Provider value={themeInfo}>
      <themeInfoDispatchContext.Provider value={dispatch}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </themeInfoDispatchContext.Provider>
    </themeInfoContext.Provider>
  );
};
