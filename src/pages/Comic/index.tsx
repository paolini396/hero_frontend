import React from 'react';
import { useHistory } from 'react-router-dom'

import { FiStar } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth';
import { useComic } from '../../hooks/comic';
import { useToast } from '../../hooks/tost';

import { Container } from './styles';

export const Comic: React.FC = () => {
  const history = useHistory();

  const { user } = useAuth();
  const { comic, AddFavorite } = useComic();
  const { addToast } = useToast();

  const handleAddToFavorite = async () => {
    if(!comic?.id) {
      addToast({
        type: 'info',
        title: 'História em quadrinho não encontrada',
        description:
          'Visualize uma história em quadrinho para marca-lá como favorito.',
      });
      history.goBack();
      return;
    }
    await AddFavorite(user?.id, comic?.id)
    history.goBack();
  }

  return (
    <Container>
      <img src={`${comic?.image_url}.${comic?.extension}`} alt={comic?.title} />
      <div className="favorite">
        <button className="button-favorite" type="button" onClick={handleAddToFavorite}>
          <FiStar size={20}/>
          Favoritar
        </button>
        <button className="button-un-favorite">
          <FiStar size={20}/>
          Desfavoritar
        </button>
      </div>
      <div className="description">
        <h1>{comic?.title}</h1>
        <span>{comic?.description || 'Nenhuma descrição'}</span>
      </div>
    </Container>
  )
}

