import { useRef, useEffect } from 'react';
import styles from './QuoteCard.module.css';

const PARTNERS = [
  { src: '/Images/bc_acm.svg', alt: 'BC ACM' },
  { src: '/Images/uwb_logo.png', alt: 'UWB', white: true },
  { src: '/Images/uwb_acm.png', alt: 'UWB ACM' },
  { src: '/Images/Asset_24x.png', alt: 'Partner' },
];

export default function QuoteCard() {
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
    <section className={`${styles.section} snap-section`}>
      <div className={styles.card} ref={ref}>
        <p>"Everything around you that you called life, was made up by people who were no smarter than you... you can build your own things that other people can use."</p>
        <cite>— Steve Jobs</cite>
      </div>
      <div className={styles.logoCarouselWrap}>
        <div className={styles.logoCarousel}>
          {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((p, i) => (
            <img key={i} src={p.src} alt={p.alt} className={p.white ? `${styles.logoImg} ${styles.logoImgWhite}` : styles.logoImg} />
          ))}
        </div>
      </div>
    </section>
  );
}
