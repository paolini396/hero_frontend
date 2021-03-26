import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 20rem;
  max-height: 59px;
  width: 100%;

  border: 0;
  background: #ffff;
  padding: 1.1875rem 2rem;
  border-radius: 0.25rem;

  font-size: 1.125rem;
  color: #000;

  &:hover {
    background: #da5221;
  }

  transition: background 200ms;

  &:first-child {
    margin-top: 0;
  }

  &.selected {
    background: #da5221;
  }
  `;
