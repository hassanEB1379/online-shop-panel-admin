import { useGetMedia } from 'hooks/MediaHooks';
import { createContext, useContext, useReducer } from 'react';

const MediaContext = createContext();

const useMediaContext = () => {
  const media = useContext(MediaContext);

  if (media === undefined) {
    throw new Error('using MediaProvider in top of tree');
  }

  return media;
};

const mediaReducer = (media, action) => {
  switch (action.type) {
    case 'GET_FILES': {
      return [...action.payload];
    }
    case 'UPLOAD': {
      return [action.payload, ...media];
    }
    case 'DELETE': {
      return;
    }

    default: {
      return;
    }
  }
};

const MediaProvider = ({ children }) => {
  const [media, dispatch] = useReducer(mediaReducer, []);

  useGetMedia(data => {
    dispatch({ type: 'GET_FILES', payload: data });
  });

  return (
    <MediaContext.Provider value={{ media, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

export { useMediaContext };
export default MediaProvider;
