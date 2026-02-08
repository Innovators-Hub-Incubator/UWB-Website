import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <Hero />
      <Gallery />
      <CTA />
    </div>
  );
}
