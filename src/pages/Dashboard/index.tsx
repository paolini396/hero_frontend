import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useComic } from '../../hooks/comic';
import { useCharacter } from '../../hooks/character';

import { TabButton } from '../../components/TabButton';
import { Card } from '../../components/Card';
import { Container, Tabs, Content } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const { list: listComics, comics, show } = useComic();
  const { list: listCharacters, characters } = useCharacter();

  const [selectedTabId, setDelectedTabId] = useState('favorites');

 const handleShowComic = async (id: string) => {
  await show(id);
  history.push('/comic');
 }

  useEffect(() => {
    async function loadData() {
      await listComics();
      await listCharacters();
    };
    loadData();
  }, [listComics, listCharacters])

  return (
    <Container>
      <Tabs>
        <TabButton
          id='1'
          title="Meus Favoritos"
          onClick={() => setDelectedTabId('favorites')}
          selected={selectedTabId === 'favorites'}
        />
        <TabButton
          id='2'
          title="Histórias em Quadrinhos"
          onClick={() => setDelectedTabId('comics')}
          selected={selectedTabId === 'comics'}
        />
        <TabButton
          id='3'
          title="Personagens"
          onClick={() => setDelectedTabId('characters')}
          selected={selectedTabId === 'characters'}
        />
      </Tabs>
      <Content>
        <div className="movies-list">
          {selectedTabId === 'comics' && (
            <>
              {comics?.map(comic => (
                <Card
                  key={comic.id}
                  title={comic.title}
                  poster={`${comic.image_url}.${comic.extension}`}
                  onClick={() => handleShowComic(comic.id) }
              />
              ))}
            </>
          )}
          {selectedTabId === 'characters' && (
            <>
              {characters?.map(character => (
                <Card
                  key={character.id}
                  title={character.name}
                  poster={`${character.image_url}.${character.extension}`}
                  onClick={() => {}}
              />
              ))}
            </>
          )}

        </div>
      </Content>
    </Container>
  )
}

export default Dashboard;
