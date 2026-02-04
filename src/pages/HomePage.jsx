import Hero from '../components/Hero';
import QuoteCard from '../components/QuoteCard';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <Hero />
      <QuoteCard />
      <Gallery />
      <CTA />
    </div>
  );
}
