import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

// Lazy loading components for performance
const Home = lazy(() => import('./pages/Home'));
const Bridal = lazy(() => import('./pages/Bridal'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Collections = lazy(() => import('./pages/Collections'));
const Bangles = lazy(() => import('./pages/Bangles'));
const Necklaces = lazy(() => import('./pages/Necklaces'));
const SilverArticles = lazy(() => import('./pages/SilverArticles'));
const Watches = lazy(() => import('./pages/Watches'));
const MensWatches = lazy(() => import('./pages/MensWatches'));
const WomensWatches = lazy(() => import('./pages/WomensWatches'));
const FAQ = lazy(() => import('./pages/FAQ'));

// Loading Fallback
const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-bg-cream">
        <div className="w-16 h-16 border-4 border-secondary-color border-t-transparent rounded-full animate-spin"></div>
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <SEO /> {/* Default SEO tags */}
            <div className="App bg-bg-cream min-h-screen flex flex-col font-sans">
                <Header />
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bridal-jewellery" element={<Bridal />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/collections/bangles" element={<Bangles />} />
                        <Route path="/collections/necklaces" element={<Necklaces />} />
                        <Route path="/collections/silver-articles" element={<SilverArticles />} />
                        <Route path="/collections/watches" element={<Watches />} />
                        <Route path="/collections/watches/men" element={<MensWatches />} />
                        <Route path="/collections/watches/women" element={<WomensWatches />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </Suspense>
                <Footer />

                {/* Global Golden Border Frame - Adjusted for Mobile */}
                <div className="fixed inset-0 pointer-events-none z-[100] border-[8px] md:border-[12px] border-white/0">
                    <div className="absolute inset-0 border border-secondary-color/20 m-1 md:m-2 rounded-sm"></div>
                    <div className="absolute inset-0 border border-secondary-color/10 m-2 md:m-3 rounded-sm"></div>
                </div>
            </div>
        </Router>
    );
}

export default App;
