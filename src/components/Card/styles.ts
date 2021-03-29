import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 0;
  gap: 20px;
  border-radius: 4px;
  padding: 5px 0;
  box-shadow: 0px 02px 8px #c4c4c4;

  img {
    width: 200;
    height: 200px;
  }

  > .card {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .card-info {
      max-width: 12.31rem;
      width: 100%;

      display: flex;
      flex-direction: column;

      > span {
        font-weight: 600;
        font-size: 12px;
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
