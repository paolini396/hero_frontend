 import React from 'react';

import { FiStar, FiClock } from 'react-icons/fi';
import { Container } from './styles';

interface ComicCardProps {
  title: string;
  poster?: string;
  rating?: string;
  runtime?: string;
}

export function ComicCard(props: ComicCardProps) {
  return (
    <Container>
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info" >
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <FiStar /> {props.rating}
            </div>

            <div>
              <FiClock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}