import { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Erro ao carregar usuário do localStorage:", error);
      return null;
    }
  });

  const login = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('currentUser', JSON.stringify(userData));
    } catch (error) {
      console.error("Erro ao salvar usuário no localStorage:", error);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('currentUser');
    } catch (error) {
      console.error("Erro ao remover usuário do localStorage:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};