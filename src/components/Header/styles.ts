import styled from 'styled-components';
import { shade} from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-width: 420px;
  height: 5rem;
  background: #151515;

  button {
    border: 0;
    padding: 20px;
    border-radius: 8px;
    margin-right: 60px;
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

export const Content = styled.div`
  display: flex;
  margin-left: 60px;
  align-items: center;
  gap: 40px;

  img {
      width: 120px;
      height: 50px;
    }

    strong {
      color: #c4c4c4;
      font-size: 16px;

    }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: #da5221;
  }
`;