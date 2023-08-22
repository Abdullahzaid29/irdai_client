import { useState, useEffect } from 'react';

const fakeAuthService = {
  
  logout: () => {
    localStorage.removeItem('token');
  },
  checkAuth: async () => {
    const token = localStorage.getItem('token');
    console.log("token",token);
    if (!token) {
      return false;
    }
    return true;
  },
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    fakeAuthService.checkAuth().then(result => {
      setIsAuthenticated(result);
    });
  }, []);

  const logout = () => {
    console.log("log out");
    fakeAuthService.logout();
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    logout,
  };
};

export default fakeAuthService;
