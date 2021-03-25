import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 420px;
  padding: 0 60px;
  `;

export const Tabs = styled.div`
  margin-top: 20px;
  box-shadow: 0px 02px 8px #c4c4c4;
   width: 100%;
   padding: 20px 0;
   align-items: center;
   justify-content: center;
   display: flex;
   gap: 20px;

`;

export const Content = styled.div`
  margin-top: 2.625rem;
  height: calc(100vh - 250px);
  overflow: auto;

  .movies-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4.75rem;
    list-style: none;
  }

`;