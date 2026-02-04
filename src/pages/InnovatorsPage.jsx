import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function InnovatorsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Innovators</h1>
        <p>Meet the people behind Innovators Hub.</p>
        <Link to="/" className={styles.link}>← Back home</Link>
      </div>
    </div>
  );
}
