import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

import { useToast } from '../hooks/tost'

export interface IComic {
  id: string;
  id_marvel: number;
  title: string;
  description: string;
  image_url: string;
  extension: string;
}

interface ComicState {
  comics: IComic[];
  comic: IComic;
  comicLoading: boolean;
}

interface ComicContextData {
  comics?: IComic[];
  comic?: IComic;
  comicLoading?: boolean;
  list(): Promise<void>;
  show(id: string): Promise<void>;
  AddFavorite(user_id: string, comic_id: string): Promise<void>;
}

const ComicContext = createContext<ComicContextData>({} as ComicContextData);

const ComicProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

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

  const show = useCallback(async (id: string) => {
    setComicData({ comicLoading: true } as ComicState);
    try {
      const { comic } = await api.get(`comics/${id}`).then(res => res.data);

      setComicData({ comicLoading: false, comic} as ComicState);

    } catch(err) {
      setComicData({comicLoading: false} as ComicState);
      throw err.message;
    }

  }, [setComicData]);

  const AddFavorite = useCallback(async (user_id: string, comic_id: string) => {
    setComicData({ comicLoading: true } as ComicState);
    try {

      console.log({user_id, comic_id});
      await api.post('users/comics', {
        user_id,
        comics: [{ id: comic_id }],
      });

      addToast({
        type: 'success',
        title: 'História em quadrinho Adiciona aos favoritos. ',
      });

      setComicData({ comicLoading: false} as ComicState);

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
      show,
      AddFavorite,
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
