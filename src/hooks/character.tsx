import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface Character {
  id?: string;
  id_marvel: number;
  name: string;
  description: string;
  image_url: string;
  extension: string;
}

interface CharacterState {
  characters: Character[];
  character: Character;
  characterLoading: boolean;
}

interface CharacterContextData {
  characters?: Character[];
  character?: Character;
  characterLoading?: boolean;
  list(): Promise<void>;
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

const CharacterProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<CharacterState>({} as CharacterState);

  const setCharacterData = useCallback((newData: CharacterState) => {
    setData(oldData => ({...oldData, ...newData}));
  },[])

  const list = useCallback(async () => {
    setCharacterData({ characterLoading: true } as CharacterState);
    try {
      const { characters } = await api.get('characters').then(res => res.data);

      setCharacterData({ characterLoading: false, characters } as CharacterState);

    } catch(err) {
      setCharacterData({characterLoading: false} as CharacterState);
      throw err.message;
    }

  }, [setCharacterData]);

  return (
    <CharacterContext.Provider
    value={{
      ...data,
      list,
    }}>
      {children}
    </CharacterContext.Provider>
  );
};

function useCharacter(): CharacterContextData {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useCharacter must be used within an CharacterProvider');
  }

  return context;
}

export { CharacterProvider, useCharacter };
