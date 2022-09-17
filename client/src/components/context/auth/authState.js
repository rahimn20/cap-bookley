import { useState, useCallback } from 'react';
import authContext from '.';

function AuthState({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = async user => {
    return fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.status >= 400) {
          throw res;
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error signing in user', error);
      });
  };

  const register = async user => {
    fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.status >= 400) {
          throw res;
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error registering in user', error);
      });
  };

  const getUserFromLocal = useCallback(async () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setUser(user);
      setCart(user.cart);
    } else {
      setUser(null);
    }
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem('user');
    setUser(null);
    setCart([]);
  }, []);

  const addToCart = useCallback(
    async book => {
      const updatedCart = [...cart];
      updatedCart.push(book);

      setCart(updatedCart);

      const bookId = updatedCart.map(book => book._id);

      fetch(`/api/users/${user._id}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(bookId),
      })
        .then(res => {
          if (res.status >= 400) {
            throw res;
          }
          return res.json();
        })
        .then(data => {
          setUser(data);
          localStorage.setItem('user', JSON.stringify(data));
        })
        .catch(error => {
          console.error('Error registering in user', error);
        });
    },
    [cart, user]
  );

  const checkOut = useCallback(async () => {
    fetch(`/api/users/${user._id}/checkout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then(res => {
        if (res.status >= 400) {
          throw res;
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
        setCart(data.cart);
        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error registering in user', error);
      });
  }, [user]);

  return (
    <authContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        getUserFromLocal,
        addToCart,
        cart,
        checkOut,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthState;
