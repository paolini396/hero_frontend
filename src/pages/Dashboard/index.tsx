import React, { useState, useEffect } from 'react';

import { useComic } from '../../hooks/comic';

import { TabButton } from '../../components/TabButton';
import { ComicCard } from '../../components/ComicCard';
import { Container, Tabs, Content } from './styles';

const Dashboard: React.FC = () => {
  const { list, comics } = useComic();

  const [selectedTabId, setDelectedTabId] = useState('1');

  useEffect(() => {
    async function loadData() {
      await list();
    };
    loadData();
  }, [])

  return (
    <Container>
      <Tabs>
        <TabButton
          id='1'
          title="Meus Favoritos"
          onClick={() => setDelectedTabId('1')}
          selected={selectedTabId === '1'}
        />
        <TabButton
          id='2'
          title="Histórias em Quadrinhos"
          onClick={() => setDelectedTabId('2')}
          selected={selectedTabId === '2'}
        />
        <TabButton
          id='3'
          title="Personagens"
          onClick={() => setDelectedTabId('3')}
          selected={selectedTabId === '3'}
        />
      </Tabs>
      <Content>
        <div className="movies-list">

          {comics?.map(comic => (
            <ComicCard
              key={comic.id}
             title={comic.title}
             poster={`${comic.image_url}.jpg`}
           />
          ))}
        </div>
      </Content>
    </Container>
  )
}

export default Dashboard;
