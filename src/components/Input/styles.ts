import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  width: 100%;

  border: 2px solid #232129;
  color: #3B3B3B;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}


  ${(props) =>
    props.isFocused &&
    css`
      color: #da5221;
      border-color: #da5221;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #da5221;
    `}


  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000000;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
