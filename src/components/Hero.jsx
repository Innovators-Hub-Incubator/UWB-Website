import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Users } from 'lucide-react';
import styles from './Hero.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const textRevealVariants = {
  hidden: { y: '110%' },
  visible: { 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      {/* Background Elements */}
      <div className={styles.gridBackground}></div>
      <motion.div 
        className={styles.glowOrb}
        style={{ y: y2, opacity }} 
      />

      <motion.div 
        className={styles.contentWrapper}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.badgeWrapper}>
          <motion.div variants={fadeVariants} className={styles.badge}>
            <span className={styles.statusDot}></span>
            UWB Student-Led Organization
          </motion.div>
        </div>

        <h1 className={styles.headline}>
          <div className={styles.mask}>
            <motion.span variants={textRevealVariants} className={styles.block}>
              WE BUILD
            </motion.span>
          </div>
          <div className={styles.mask}>
            <motion.span variants={textRevealVariants} className={`${styles.block} ${styles.highlight}`}>
              THE FUTURE
            </motion.span>
          </div>
        </h1>

        <motion.p variants={fadeVariants} className={styles.subtext}>
          A collective of entrepreneurs, builders, and innovators<br className={styles.break} />
          defying the odds at the University of Washington Bothell.
        </motion.p>

        <motion.div variants={fadeVariants} className={styles.actions}>
          <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
            <span>Join the Hub</span>
            <ArrowRight size={20} />
          </a>
          
          <div className={styles.socialStack}>
            <a href="https://www.linkedin.com/company/innovators-hub-incubator/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/uwb_innovatorshub/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:innovatorshub@uw.edu" className={styles.socialLink} aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://gather.uwb.edu/feeds?type=club&type_id=35516&tab=about" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="UWB Gather">
              <Users size={20} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.scrollIndicator}
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  );
}
