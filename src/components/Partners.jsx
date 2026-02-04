import { useRef, useEffect } from 'react';
import styles from './Partners.module.css';

const PARTNERS = [
  { src: '/Images/bc_acm.svg', alt: 'BC ACM' },
  { src: '/Images/uwb_logo.png', alt: 'UWB' },
  { src: '/Images/uwb_acm.png', alt: 'UWB ACM' },
  { src: '/Images/Asset_24x.png', alt: 'Partner' },
];

export default function Partners() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add(styles.visible);
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} snap-section`} ref={ref}>
      <h2 className={styles.title}>Supporters <span>&</span> Partners</h2>
      <div className={styles.wrap}>
        {PARTNERS.map((p, i) => (
          <img key={i} src={p.src} alt={p.alt} />
        ))}
      </div>
    </section>
  );
}
