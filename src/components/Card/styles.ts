import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  gap: 20px;

  img {
    width: 300px;
    height: 300px;
    width: 14.31rem;
    height: 21.25rem;
  }

  > div {
    display: flex;
    justify-content: center;


    .movie-info {
      max-width: 12.31rem;
      width: 100%;

      display: flex;
      flex-direction: column;

      > span {
        font-weight: 600;
        font-size: 1rem;
        color: #000;
        width: 100%;
        margin-top: auto;
      }

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #000;
        border-radius: 8px;
        margin-bottom: 1rem;

      }
    }
  }

  :hover {
    img {
      opacity: 0.5;
    }
  }
`;
