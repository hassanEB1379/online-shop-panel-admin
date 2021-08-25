const initialUser = {
  authenticated: false,
  info: {
    userName: '',
    email: '',
    phone: '',
    role: 'admin',
    password: '',
    image: null,
  },
};

const initFunc = initialUser => {
  const user = localStorage.getItem('user');

  return user ? JSON.parse(user) : initialUser;
};

// reducer
const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS': {
      return {
        authenticated: true,
        info: {
          ...state.info,
          ...action.payload,
        },
      };
    }
    case 'LOGOUT': {
      return initialUser;
    }
    case 'UPDATE_INFO': {
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload,
        },
      };
    }
    case 'UPLOAD_IMG': {
      return {
        ...state,
        info: {
          ...state.info,
          image: action.payload,
        },
      };
    }
    default:
      break;
  }
};

// actions
const loginSuccess = payload => {
  return { type: 'LOGIN_SUCCESS', payload };
};

const logout = () => {
  return { type: 'LOGOUT' };
};

const updateInfo = payload => {
  return { type: 'UPDATE_INFO', payload };
};

const uploadUserImg = payload => {
  return { type: 'UPLOAD_IMG', payload };
};

export {
  initialUser,
  initFunc,
  userReducer,
  loginSuccess,
  logout,
  updateInfo,
  uploadUserImg,
};
