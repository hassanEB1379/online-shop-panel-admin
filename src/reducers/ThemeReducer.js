const initialTheme = {
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
        themeName: action.payload,
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
  return { type: 'changeTheme', payload: themeName };
};

export { initialTheme, initFunc, themeReducer, changeDir, changeTheme };
