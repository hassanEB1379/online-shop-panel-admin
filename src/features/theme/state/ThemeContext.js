import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { useEffect, useReducer, useContext, createContext } from 'react';
import {
  themeReducer,
  initialTheme,
  initFunc,
} from 'features/theme/state/ThemeReducer';
import { typography, overrides, shadows, RTL } from 'features/theme/utils';

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
    typography,
    overrides,
    shadows,
    ...themeInfo,
  });

  // save new utils to localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeInfo));
  }, [themeInfo]);

  useEffect(() => {
    document.documentElement.dir = themeInfo.direction;
  }, [themeInfo.direction]);

  return (
    <themeInfoContext.Provider value={themeInfo}>
      <themeInfoDispatchContext.Provider value={dispatch}>
        <MuiThemeProvider theme={theme}>
          <RTL>{children}</RTL>
        </MuiThemeProvider>
      </themeInfoDispatchContext.Provider>
    </themeInfoContext.Provider>
  );
};
