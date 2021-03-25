import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './tost';
import { ComicProvider } from './comic';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ComicProvider>
      <ToastProvider> {children} </ToastProvider>
    </ComicProvider>
  </AuthProvider>
);

export default AppProvider;
