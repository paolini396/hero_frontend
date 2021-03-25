import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './tost';
import { ComicProvider } from './comic';
import { CharacterProvider } from './character';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ComicProvider>
      <CharacterProvider>
      <ToastProvider> {children} </ToastProvider>
      </CharacterProvider>
    </ComicProvider>
  </AuthProvider>
);

export default AppProvider;
