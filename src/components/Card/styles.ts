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
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

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
        color: #fbfbfb;

        margin-top: auto;
        margin-bottom: 0.5rem;
      }

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        margin-bottom: 1rem;

        div {
          display: flex;
          align-items: center;

          font-weight: 600;
          color: #ff2;

          svg {
            color: #FAE800;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  :hover {
    img {
      opacity: 0.5;
    }
  }
`;
