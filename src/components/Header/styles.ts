import styled from 'styled-components';
import { shade} from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 5rem;
  background: #151515;

  img {
    width: 120px;
    height: 50px;
    margin-left: 20px;
  }

  button {
    border: 0;
    padding: 20px;
    border-radius: 8px;
    margin-right: 20px;
    background: ${shade(-0.8, '#151515')};
    transition: background-color 0.2s;

    svg {
      color: #fff;
      cursor: pointer;
    }

    :hover {
      background: ${shade(0.2, '#151515')};
    }
  }
`;

export const ContentList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #da5221;
    font-weight: 600;

    &:hover {
    color: ${shade(0.2, '#da5221')};
  }
  }
`
