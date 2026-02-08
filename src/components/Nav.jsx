import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Nav.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      mass: 0.5,
      staggerChildren: 0.1 
    } 
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const mobileMenuVariants = {
  closed: { opacity: 0, scale: 0.95, y: -20, display: "none" },
  open: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    display: "flex",
    transition: { type: "spring", stiffness: 200, damping: 25 }
  }
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav 
        className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className={styles.navInner}>
          <Link to="/" className={styles.logo}>
            <motion.img 
              src="/Images/logo.svg" 
              alt="Innovators Hub" 
            />
            <span className={styles.logoText}>Innovators <span className={styles.highlight}>Hub</span></span>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.desktopLinks}>
            {['About', 'Events', 'Innovators', 'Contacts'].map((item) => (
              <motion.li key={item} variants={linkVariants}>
                <Link to={`/${item.toLowerCase()}`} className={styles.link}>
                  {item}
                  <motion.span 
                    className={styles.underline} 
                    initial={{ width: 0 }} 
                    whileHover={{ width: '100%' }} 
                  />
                </Link>
              </motion.li>
            ))}
            <motion.li variants={linkVariants}>
              <motion.a 
                href={JOIN_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Us
              </motion.a>
            </motion.li>
          </ul>

          {/* Mobile Toggle */}
          <motion.button 
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className={styles.mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
             {['About', 'Events', 'Innovators', 'Contacts'].map((item) => (
              <Link key={item} to={`/${item.toLowerCase()}`} className={styles.mobileLink}>
                {item}
              </Link>
            ))}
            <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={`${styles.mobileLink} ${styles.mobileCta}`}>
              Join Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
