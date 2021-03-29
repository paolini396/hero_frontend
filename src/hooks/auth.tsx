import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token?: string;
  user: User;
  authLoading: boolean;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  authLoading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Hero:token');
    const user = localStorage.getItem('@Hero:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user), authLoading: false };
    }

    return {} as AuthState;
  });

  const setAuthData = useCallback((newData: AuthState) => {
    setData(oldData => ({ ...oldData, ...newData }));
  }, []);

  const signIn = useCallback(
    async ({ email, password }) => {
      setAuthData({ authLoading: true } as AuthState);
      try {
        const response = await api.post('sessions', {
          email,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@Hero:token', token);
        localStorage.setItem('@Hero:user', JSON.stringify(user));

        setAuthData({ token, user, authLoading: false });
      } catch (err) {
        setAuthData({ authLoading: false } as AuthState);
        throw err.message;
      }
    },
    [setAuthData],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@Hero:token');
    localStorage.removeItem('@Hero:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      setAuthData({ authLoading: true } as AuthState);
      try {
        const response = await api.put('/profile', user);

        localStorage.setItem('@GoBarber:user', JSON.stringify(response.data));

        setData({
          token: data?.token,
          user: response.data,
          authLoading: false,
        });

      } catch (err) {
        setAuthData({ authLoading: false } as AuthState);
        throw err.message;
      }
    },
    [setData, data],
  );

  return (
    <AuthContext.Provider
      value={{
        ...data,
        user: data.user,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
