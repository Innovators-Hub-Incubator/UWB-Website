import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>About</h1>
        <p>Innovators Hub at UWB — we inspire a community of ambitious entrepreneurs, builders, and innovators.</p>
        <Link to="/" className={styles.link}>← Back home</Link>
      </div>
    </div>
  );
}
