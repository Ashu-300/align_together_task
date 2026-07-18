import { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '../api/authApi';

const AuthContext = createContext(null);

const getSessionTimeoutMs = () => {
  const minutes = Number(import.meta.env.VITE_SESSION_TIMEOUT_MINUTES || 30);
  return minutes * 60 * 1000;
};

const setActivityTimestamp = () => {
  localStorage.setItem('sessionActivity', Date.now().toString());
};

const isSessionExpired = () => {
  const activity = localStorage.getItem('sessionActivity');
  if (!activity) {
    return false;
  }

  return Date.now() - Number(activity) > getSessionTimeoutMs();
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      return undefined;
    }

    const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    const handleActivity = () => {
      setActivityTimestamp();
    };

    activityEvents.forEach((event) => window.addEventListener(event, handleActivity));

    return () => {
      activityEvents.forEach((event) => window.removeEventListener(event, handleActivity));
    };
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    if (isSessionExpired()) {
      localStorage.removeItem('token');
      localStorage.removeItem('sessionActivity');
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    try {
      const response = await authApi.getProfile();
      if (response.success) {
        setActivityTimestamp();
        setUser(response.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('sessionActivity');
      setIsAuthenticated(false);
    }

    setLoading(false);
  };

  const login = async (credentials) => {
    const response = await authApi.login(credentials);
    if (response.success) {
      localStorage.setItem('token', response.token);
      setActivityTimestamp();
      await checkAuth();
    }
    return response;
  };

  const register = async (userData) => {
    const response = await authApi.register(userData);
    if (response.success) {
      localStorage.setItem('token', response.token);
      setActivityTimestamp();
      await checkAuth();
    }
    return response;
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sessionActivity');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
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
