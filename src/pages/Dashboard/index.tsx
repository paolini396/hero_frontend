import React, {useState} from 'react';

import { TabButton } from '../../components/TabButton';
import { Container, Tabs } from './styles';

const Dashboard: React.FC = () => {
  const [selectedTabId, setDelectedTabId] = useState('1');

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
    </Container>
  )
}

export default Dashboard;
