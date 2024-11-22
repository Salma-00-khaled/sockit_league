import { createContext, useContext, useState } from "react";
export const AuthContext = createContext({});
export const useAuth = useContext(AuthContext);

export const AuthProvider = ({ childern }) => {
  const [userData, setUserData] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider
      value={{ userData, setUserData, setIsAuthenticated, isAuthenticated }}
    >
      {childern}
    </AuthContext.Provider>
  );
};
