import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
  poster?: string;
  onClick?(): void;
}

export function Card(props: CardProps) {
  return (
    <Container type="button" onClick={props.onClick}>
      <img src={props.poster} alt={props.title} />
      <div className="card">
        <div className="card-info">
          <span>{props.title}</span>
        </div>
      </div>
    </Container>
  );
}
