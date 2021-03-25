import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
  poster?: string;
}

export function Card(props: CardProps) {
  return (
    <Container>
      <div>
        <div className="movie-info">
          <span>{props.title}</span>
        </div>
      </div>
      <img src={props.poster} alt={props.title} />
    </Container>
  );
}
