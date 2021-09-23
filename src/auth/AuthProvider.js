import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({ id: 1, username: "Basstian94" });
  };
  const logout = () => {
    setUser(null);
  };
  const data = { user, login, logout };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
