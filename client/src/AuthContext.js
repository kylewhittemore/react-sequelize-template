import React, { useState } from 'react';

export const AuthContext = React.createContext(false);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true)
  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};
