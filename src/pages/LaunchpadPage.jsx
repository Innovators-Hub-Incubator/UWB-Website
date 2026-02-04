import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function LaunchpadPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Launchpad</h1>
        <p>Our launchpad program for student founders.</p>
        <Link to="/" className={styles.link}>← Back home</Link>
      </div>
    </div>
  );
}
