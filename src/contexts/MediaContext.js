import { createContext, useContext, useReducer } from 'react';

const MediaContext = createContext();

const useMedia = () => {
  const media = useContext(MediaContext);

  if (media === undefined) {
    throw new Error('using MediaProvider in top of tree');
  }

  return media;
};

const mediaReducer = (media, action) => {
  switch (action.type) {
    case 'UPLOAD': {
      return;
    }
    case 'DELETE': {
      return;
    }

    default: {
      return;
    }
  }
};

const initialMedia = [
  {
    id: 1,
    thumbnail: '/static/images/camera.jpg',
    name: 'camera.jpg',
    url: 'http://localhost:3000/static',
  },
  {
    id: 2,
    thumbnail: '/static/images/ben.jpeg',
    name: 'ben.jpg',
    url: 'http://localhost:3000/static',
  },
  {
    id: 3,
    thumbnail: '/static/images/download.jpg',
    name: 'download.jpg',
    url: 'http://localhost:3000/static',
  },
  {
    id: 4,
    thumbnail: '/static/images/images (1).jpg',
    name: 'images (1).jpg',
    url: 'http://localhost:3000/static',
  },
  {
    id: 5,
    thumbnail: '/static/images/city.jpg',
    name: 'city.jpg',
    url: 'http://localhost:3000/static',
  },
];

const MediaProvider = ({ children }) => {
  const [media, dispatch] = useReducer(mediaReducer, initialMedia);

  return (
    <MediaContext.Provider value={{ media, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};

export { useMedia };
export default MediaProvider;
