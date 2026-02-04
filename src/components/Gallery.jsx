import { useRef, useEffect, useState, useMemo } from 'react';
import styles from './Gallery.module.css';

const SIZES = ['sm', 'md', 'lg', 'xl'];
const ALIGNS = ['top', 'mid', 'bottom'];

const GALLERY_ITEMS = [
  { src: '/Gallery Images/1746042265405.png', caption: 'Launchpad Week 1 · 2025' },
  { src: '/Gallery Images/1746042307507.png', caption: 'Launchpad Week 2 · 2025' },
  { src: '/Gallery Images/20250211_134530.jpg', caption: 'First Meeting · 2025' },
  { src: '/Gallery Images/20250307_153232.jpg', caption: 'Valve HQ Tour · 2025' },
  { src: '/Gallery Images/DSC04949_1.jpg', caption: 'T-Mobile Tour · 2025' },
  { src: '/Gallery Images/DSC04995_1.jpg', caption: 'T-Mobile Tour · 2025' },
  { src: '/Gallery Images/IMG_3533.jpg', caption: 'Valve HQ Tour · 2025' },
  { src: '/Gallery Images/IMG_3869.jpg', caption: 'Expedia Tour · 2025' },
  { src: '/Gallery Images/IMG_3877.jpg', caption: 'Expedia Tour · 2025' },
  { src: '/Gallery Images/PXL_20251010_173649770.png', caption: 'Google Tour · 2025' },
  //{ src: '/Gallery Images/Screenshot 2026-02-03 at 5.25.32 PM.png', caption: 'Launchpad Demo Day · 2025' },
  //{ src: '/Gallery Images/Screenshot 2026-02-03 at 5.25.41 PM.png', caption: 'Launchpad Demo Day · 2025' },
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function Gallery() {
  const zoneRef = useRef(null);
  const trackRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  const itemsWithLayout = useMemo(
    () =>
      GALLERY_ITEMS.map((item) => ({
        ...item,
        size: pickRandom(SIZES),
        align: pickRandom(ALIGNS),
      })),
    []
  );

  useEffect(() => {
    const zone = zoneRef.current;
    const track = trackRef.current;
    if (!zone || !track) return;

    const onScroll = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const zoneTop = zone.offsetTop;
      const zoneHeight = zone.offsetHeight;
      const trackWidth = track.scrollWidth;
      const viewportW = window.innerWidth;
      const scrollRange = Math.max(1, zoneHeight - vh);
      const paddingRight = 64;
      const startTranslate = 0;
      const endTranslate = Math.min(0, viewportW - trackWidth - paddingRight);
      const delayFraction = 0.22;

      if (y <= zoneTop) {
        track.style.transform = `translate3d(${startTranslate}px, 0, 0)`;
      } else if (y >= zoneTop + scrollRange) {
        track.style.transform = `translate3d(${endTranslate}px, 0, 0)`;
      } else {
        const progressRaw = (y - zoneTop) / scrollRange;
        const progress = Math.max(0, (progressRaw - delayFraction) / (1 - delayFraction));
        const easeProgress = 1 - Math.pow(1 - progress, 1.4);
        const tx = startTranslate + easeProgress * (endTranslate - startTranslate);
        track.style.transform = `translate3d(${tx}px, 0, 0)`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <section className={`${styles.zone} snap-section`} id="gallery-scroll-zone" ref={zoneRef}>
        <div className={styles.sticky}>
          <div className={styles.trackWrap}>
            <div className={styles.track} id="gallery-track" ref={trackRef}>
              {itemsWithLayout.map((item, i) => (
                <div
                  key={i}
                  className={`${styles.item} ${styles[item.size]} ${styles[item.align]}`}
                  onClick={() => setLightbox(encodeURI(item.src))}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(encodeURI(item.src))}
                  role="button"
                  tabIndex={0}
                >
                  <span className={styles.caption}>{item.caption}</span>
                  <img src={encodeURI(item.src)} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button type="button" className={styles.lightboxClose} onClick={() => setLightbox(null)} aria-label="Close">
            &times;
          </button>
          <img src={lightbox} alt="Enlarged" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
