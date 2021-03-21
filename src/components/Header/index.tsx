import React, { useEffect } from 'react';
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

  useEffect(() => {
    console.log({user})
  }, [])

  return (
    <>
    <Container>
      <Content>
        <img src={Logo} alt="Hero" />
        <Profile>
          <strong>{`Bem vindo ${user?.name}`}</strong>
          <Link to="/profile">Perfil</Link>
        </Profile>
      </Content>

      <button type="button" onClick={handleSingOut}>
        <FiPower />
      </button>
    </Container>
    {children}
  </>
)};

