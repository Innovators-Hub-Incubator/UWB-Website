import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';
const WORDS = ['entrepreneurs', 'builders', 'innovators'];

export default function Hero({ onScrollProgress }) {
  const [wordIndex, setWordIndex] = useState(0);
  const contentRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (onScrollProgress) onScrollProgress(y, vh);
      if (contentRef.current && y < vh) {
        const progress = Math.min(y / vh, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 1.2);
        const scale = 1 - easeProgress * 0.5;
        const opacity = 1 - easeProgress * 0.6;
        const translateZ = -easeProgress * 80;
        contentRef.current.style.transform = `perspective(1200px) scale(${scale}) translateY(${y * 0.15}px) translateZ(${translateZ}px)`;
        contentRef.current.style.opacity = opacity;
      }
      if (orbRef.current && y < vh) {
        const progress = Math.min(y / vh, 1);
        const scaleOrb = 1 - progress * 0.3;
        orbRef.current.style.transform = `translate3d(0, ${y * 0.2}px, 0) scale(${scaleOrb})`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScrollProgress]);

  return (
    <section className={`${styles.hero} snap-section`} id="hero">
      <div className={styles.bgOrb} ref={orbRef} aria-hidden />
      <div className={styles.content} ref={contentRef}>
        <span className={styles.badge}>UWB · Student-led</span>
        <h1>
          Innovators<br />
          <span className={styles.line2}>Hub</span>
        </h1>
        <p className={styles.tag}>We are a community of student</p>
        <p className={styles.word}>{WORDS[wordIndex]}</p>
        <p className={styles.tag}>We defy the odds.</p>
        <div className={styles.cta}>
          <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Join the community
          </a>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/innovators-hub-incubator/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <img src="/Images/linkedin-brands.svg" alt="" /> LinkedIn
            </a>
            <a href="https://www.instagram.com/uwb_innovatorshub/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
              <img src="/Images/instagram.svg" alt="" /> Instagram
            </a>
            <a href="mailto:innovatorshub@uw.edu" className={styles.socialBtn}>Email Us</a>
            <a href="https://gather.uwb.edu/feeds?type=club&type_id=35516&tab=about" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>UWB Gather</a>
          </div>
        </div>
      </div>
    </section>
  );
}
