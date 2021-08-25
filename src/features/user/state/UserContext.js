import { createContext, useContext, useEffect, useReducer } from 'react';
import {
  initialUser,
  userReducer,
  initFunc,
} from 'features/user/state/UserReducer';

const userContext = createContext();
const userDispatchContext = createContext();

export const useUser = () => useContext(userContext);
export const useUserDispatch = () => useContext(userDispatchContext);

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialUser, initFunc);

  // update localstorage when user state update
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <userContext.Provider value={user}>
      <userDispatchContext.Provider value={dispatch}>
        {children}
      </userDispatchContext.Provider>
    </userContext.Provider>
  );
};
