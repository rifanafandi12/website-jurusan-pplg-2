import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import HomePage from './pages/HomePage';
import SambutanPage from './pages/SambutanPage';
import PengajarPage from './pages/PengajarPage';
import StrukturPage from './pages/StrukturPage';
import ProfilPage from './pages/ProfilPage';
import AngkatanPage from './pages/AngkatanPage';
import MomenPage from './pages/MomenPage';
import NotFoundPage from './pages/NotFoundPage';
import AboutSection from './components/AboutSection';
import JobList from './components/JobList';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function TentangPage() {
  return (
    <>
      <AboutSection />
      <JobList />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/sambutan" element={<PageTransition><SambutanPage /></PageTransition>} />
        <Route path="/pengajar" element={<PageTransition><PengajarPage /></PageTransition>} />
        <Route path="/profil" element={<PageTransition><ProfilPage /></PageTransition>} />
        <Route path="/struktur" element={<PageTransition><StrukturPage /></PageTransition>} />
        <Route path="/momen" element={<PageTransition><MomenPage /></PageTransition>} />
        <Route path="/angkatan" element={<PageTransition><AngkatanPage /></PageTransition>} />
        <Route path="/tentang" element={<PageTransition><TentangPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <AnimatedRoutes />
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}