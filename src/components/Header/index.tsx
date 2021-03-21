import React from 'react';
import {Link} from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/hero.png';
// import { FiPower } from 'react-icons/fi';

import { Container, ContentList } from './styles';

export const Header: React.FC = () => {
  const { signOut } = useAuth();

  async function handleSingOut() {
    await signOut();
  }

  return (
  <Container>
    <img src={Logo} alt="Hero" />
    <ContentList>
      <li>
        <Link to="/comics">Comics</Link>
      </li>
      <li>
        <Link to="/characteres">Characteres</Link>
      </li>
    </ContentList>
    <button type="button" onClick={handleSingOut}>
      Sair
    </button>
  </Container>
)};

