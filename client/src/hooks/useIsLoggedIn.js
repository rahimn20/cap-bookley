import { useContext, useEffect, useState } from 'react';
import AuthContext from '../components/context/auth';

function useIsLoggedIn() {
  const { user } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [user]);
  //   console.log(!!token);
  return isLoggedIn;
}

export default useIsLoggedIn;
