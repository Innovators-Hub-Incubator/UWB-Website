import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import InnovatorsPage from './pages/InnovatorsPage';
import ContactPage from './pages/ContactPage';
import CursorSpotlight from './components/CursorSpotlight';
import { useLocation } from 'react-router-dom';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CursorSpotlight />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/innovators" element={<InnovatorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
