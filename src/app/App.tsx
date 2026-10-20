import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { CaseStudy } from './pages/CaseStudy';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { RouterProvider, useRouter } from './components/utils/Router';
import { ThemeProvider } from './components/utils/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { LoadingScreen } from './components/ui/LoadingScreen';

const PageContent = () => {
  const { currentPage } = useRouter();

  // Simple page transition wrapper
  const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        {currentPage === 'home' && <PageWrapper key="home"><Home /></PageWrapper>}
        {currentPage === 'work' && <PageWrapper key="work"><Work /></PageWrapper>}
        {currentPage === 'case-study' && <PageWrapper key="case-study"><CaseStudy /></PageWrapper>}
        {currentPage === 'services' && <PageWrapper key="services"><Services /></PageWrapper>}
        {currentPage === 'about' && <PageWrapper key="about"><About /></PageWrapper>}
        {currentPage === 'contact' && <PageWrapper key="contact"><Contact /></PageWrapper>}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <RouterProvider>
          <PageContent />
        </RouterProvider>
      )}
    </ThemeProvider>
  );
}
