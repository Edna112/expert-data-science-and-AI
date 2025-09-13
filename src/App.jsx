import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Insights from './pages/Insights';
import About from './pages/About';
import Contact from './pages/Contact';
import ScheduleConsultation from './pages/ScheduleConsultation';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';
import Article5 from './pages/Article5';
import Article6 from './pages/Article6';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
            <Route path="/insights/future-machine-learning-business" element={<Article1 />} />
            <Route path="/insights/building-scalable-ai-solutions" element={<Article2 />} />
            <Route path="/insights/data-driven-decision-making" element={<Article3 />} />
            <Route path="/insights/cloud-native-data-solutions" element={<Article4 />} />
            <Route path="/insights/python-data-science-tutorial" element={<Article5 />} />
            <Route path="/insights/state-of-ai-2024" element={<Article6 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
