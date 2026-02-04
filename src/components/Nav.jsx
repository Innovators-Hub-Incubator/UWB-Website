import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClass = scrolled ? `${styles.wrap} ${styles.scrolled}` : styles.wrap;

  return (
    <header className={navClass}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/Images/logo.svg" alt="Innovators Hub" />
          Innovators <span>Hub</span>
        </Link>
        <ul className={styles.links}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/launchpads">Launchpad</Link></li>
          <li><Link to="/innovators">Innovators</Link></li>
          <li><Link to="/contacts">Contact</Link></li>
          <li><a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={styles.cta}>Join Us</a></li>
        </ul>
        <button
          type="button"
          className={`${styles.mobileBtn} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <nav className={`${styles.mobileMenu} ${mobileOpen ? styles.show : ''}`}>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        <Link to="/events" onClick={() => setMobileOpen(false)}>Events</Link>
        <Link to="/launchpads" onClick={() => setMobileOpen(false)}>Launchpad</Link>
        <Link to="/innovators" onClick={() => setMobileOpen(false)}>Innovators</Link>
        <Link to="/contacts" onClick={() => setMobileOpen(false)}>Contact</Link>
        <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={styles.cta} onClick={() => setMobileOpen(false)}>Join Us</a>
      </nav>
    </header>
  );
}
