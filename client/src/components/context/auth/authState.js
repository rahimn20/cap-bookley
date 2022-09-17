import { useReducer, useState } from 'react';
import authReducer from './authReducer';
import authContext from './';

function AuthState({ children }) {
  const [user, setUser] = useState(null);

  const login = async user => {
    try {
      fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
        });
    } catch (error) {
      console.error('Error signing in user', error);
    }
  };

  const register = async user => {
    try {
      fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }).then(res => res.json());
    } catch (error) {
      console.error('Error registering user', error);
    }
  };

  return (
    <authContext.Provider value={{ user, login, register }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthState;
