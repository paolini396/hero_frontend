import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 420px;
  padding: 0 60px;
  margin-top: 20px;
  gap: 40px;
  position: relative;

  img {
    width: 400px;
    height: 400px;
  }

  .description {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    h1 {
      margin-bottom: 20px;
    }
  }

  .favorite {
    position: absolute;
    top: 340px;
    left: 130px;
    display: flex;
    flex-direction: row;
    gap: 40px;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 8px;
      padding: 8px;
    }

    .button-favorite {
      background: #FAE800;
    }

    .button-un-favorite {
      background: #f01616;
    }

  }


`;