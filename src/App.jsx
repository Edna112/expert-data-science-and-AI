import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Insights from './pages/Insights';
import About from './pages/About';
import AboutUs from './pages/AboutUs';
import FounderCEO from './pages/FounderCEO';
import Contact from './pages/Contact';
import ScheduleConsultation from './pages/ScheduleConsultation';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import Article6 from './pages/Article6';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

// Animated wrapper component
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

// Main App Routes component
const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/services" element={<AnimatedPage><Services /></AnimatedPage>} />
        <Route path="/insights" element={<AnimatedPage><Insights /></AnimatedPage>} />
        <Route path="/about" element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/about/about-us" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
        <Route path="/about/founder-ceo" element={<AnimatedPage><FounderCEO /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/schedule-consultation" element={<AnimatedPage><ScheduleConsultation /></AnimatedPage>} />
        <Route path="/insights/future-machine-learning-business" element={<AnimatedPage><Article1 /></AnimatedPage>} />
        <Route path="/insights/building-scalable-ai-solutions" element={<AnimatedPage><Article2 /></AnimatedPage>} />
        <Route path="/insights/data-driven-decision-making" element={<AnimatedPage><Article3 /></AnimatedPage>} />
        <Route path="/insights/cloud-native-data-solutions" element={<AnimatedPage><Article4 /></AnimatedPage>} />
        <Route path="/insights/python-data-science-tutorial" element={<AnimatedPage><Article5 /></AnimatedPage>} />
        <Route path="/insights/state-of-ai-2024" element={<AnimatedPage><Article6 /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-secondary">
        <Navigation />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
