import React from 'react';
import {Link} from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/hero.png';
import { FiPower } from 'react-icons/fi';

import { Container, Content, Profile } from './styles';

export const Header: React.FC = ({ children }) => {
  const { signOut, user  } = useAuth();

  async function handleSingOut() {
    await signOut();
  }

  return (
    <>
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={Logo} alt="Hero" />
        </Link>
        <Profile>
          <strong>Seja bem vindo,</strong>
          <Link to="/profile">{user?.name}</Link>
        </Profile>
      </Content>

      <button type="button" onClick={handleSingOut}>
        <FiPower />
      </button>
    </Container>
    {children}
  </>
)};

