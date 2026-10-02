import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Komponen kecil — tetap eager load
import Hero from './components/VideoHero';
import AboutSection from './components/AboutSection';
import JobList from './components/JobList';
import MemoryCarousel from './components/MemoryCarousel';

// Halaman — lazy load (hanya dimuat saat dikunjungi)
const SambutanPage = lazy(() => import('./pages/SambutanPage'));
const PengajarPage = lazy(() => import('./pages/PengajarPage'));
const StrukturPage = lazy(() => import('./pages/StrukturPage'));
const ProfilPage = lazy(() => import('./pages/ProfilPage'));
const AngkatanPage = lazy(() => import('./pages/AngkatanPage'));
const MomenPage = lazy(() => import('./pages/MomenPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <JobList />
      <MemoryCarousel />
    </>
  );
}

function TentangPage() {
  return (
    <>
      <AboutSection />
      <JobList />
    </>
  );
}

// Fallback saat lazy load — minimal, tidak ada layout shift
function PageLoader() {
  return <div className="min-h-screen" aria-hidden="true" />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/sambutan"
            element={
              <PageTransition>
                <SambutanPage />
              </PageTransition>
            }
          />
          <Route
            path="/pengajar"
            element={
              <PageTransition>
                <PengajarPage />
              </PageTransition>
            }
          />
          <Route
            path="/profil"
            element={
              <PageTransition>
                <ProfilPage />
              </PageTransition>
            }
          />
          <Route
            path="/struktur"
            element={
              <PageTransition>
                <StrukturPage />
              </PageTransition>
            }
          />
          <Route
            path="/momen"
            element={
              <PageTransition>
                <MomenPage />
              </PageTransition>
            }
          />
          <Route
            path="/angkatan"
            element={
              <PageTransition>
                <AngkatanPage />
              </PageTransition>
            }
          />
          <Route
            path="/tentang"
            element={
              <PageTransition>
                <TentangPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFoundPage />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
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
