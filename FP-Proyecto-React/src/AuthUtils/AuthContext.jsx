import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [location]);

  const checkAuth = () => {
    const token = localStorage.getItem('token');

    if (!token) {
      handleAuthFailure();
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        handleAuthFailure();
        return;
      }

      const userData = JSON.parse(localStorage.getItem('userData'));
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error during token verification:', error);
      handleAuthFailure();
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthFailure = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setUser(null);
    setIsAuthenticated(false);

    if (location.pathname !== '/checkout' && location.pathname !== '/cart' && location.pathname !== '/catalog' && location.pathname !== '/get-started' && location.pathname !== '/' && location.pathname !== '/home' && location.pathname !== '/about' && !location.pathname.startsWith('/products/')) {
      navigate('/get-started', {
        replace: true,
        state: { from: location.pathname }
      });
    }
  };


  const login = (token, userData) => {

    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {

    handleAuthFailure();
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      checkAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};