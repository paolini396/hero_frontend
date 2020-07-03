import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  border: 0;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  margin-top: 16px;
  border-radius: 4px;
  background: #ff9000;
  color: #312e38;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
