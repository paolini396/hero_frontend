import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Comic {
  id?: string;
  id_marvel: number;
  title: string;
  description: string;
  image_url: string;
  extension: string;
}

interface ComicState {
  comics: Comic[];
  comic: Comic;
  comicLoading: boolean;
}

interface ComicContextData {
  comics?: Comic[];
  comic?: Comic;
  comicLoading?: boolean;
  list(): Promise<void>;
}

const ComicContext = createContext<ComicContextData>({} as ComicContextData);

const ComicProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<ComicState>({} as ComicState);

  const setComicData = useCallback((newData: ComicState) => {
    setData(oldData => ({...oldData, ...newData}));
  },[])

  const list = useCallback(async () => {
    setComicData({ comicLoading: true } as ComicState);
    try {
      const { comics } = await api.get('comics').then(res => res.data);

      console.log({comics})
      setComicData({ comicLoading: false, comics} as ComicState);

    } catch(err) {
      setComicData({comicLoading: false} as ComicState);
      throw err.message;
    }

  }, [setComicData]);

  return (
    <ComicContext.Provider
    value={{
      ...data,
      list,
    }}>
      {children}
    </ComicContext.Provider>
  );
};

function useComic(): ComicContextData {
  const context = useContext(ComicContext);

  if (!context) {
    throw new Error('useComic must be used within an ComicProvider');
  }

  return context;
}

export { ComicProvider, useComic };
