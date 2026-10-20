import React, { createContext, useContext, useState, useEffect } from 'react';

type Page = 'home' | 'work' | 'case-study' | 'services' | 'about' | 'contact';

interface RouterContextType {
  currentPage: Page;
  setPage: (page: Page) => void;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <RouterContext.Provider value={{ currentPage, setPage: setCurrentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
