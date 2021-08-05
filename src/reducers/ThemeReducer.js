import { palettes } from 'theme';

const initialTheme = {
  palette: palettes['light'],
  themeName: 'light',
  direction: 'rtl',
};

const initFunc = initialState => {
  const themeFromLs = localStorage.getItem('theme');

  if (themeFromLs) return JSON.parse(themeFromLs);

  return { ...initialState };
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'changeDir': {
      return {
        ...state,
        direction: action.payload,
      };
    }
    case 'changeTheme': {
      return {
        ...state,
        palette: action.payload.palette,
        themeName: action.payload.themeName,
      };
    }
    default:
      break;
  }
};

// actions
const changeDir = dir => {
  return { type: 'changeDir', payload: dir };
};

const changeTheme = themeName => {
  const palette = palettes[themeName];

  return { type: 'changeTheme', payload: { palette, themeName } };
};

export { initialTheme, initFunc, themeReducer, changeDir, changeTheme };
