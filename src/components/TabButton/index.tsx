import React from 'react';
import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  selected: boolean;
}

export function TabButton({ title, selected, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...(selected && { className: 'selected' })} {...rest}>
      {title}
    </Container>
  );
}