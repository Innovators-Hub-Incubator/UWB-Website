import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import LaunchpadPage from './pages/LaunchpadPage';
import InnovatorsPage from './pages/InnovatorsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/launchpads" element={<LaunchpadPage />} />
          <Route path="/innovators" element={<InnovatorsPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
