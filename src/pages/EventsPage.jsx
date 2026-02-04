import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Events</h1>
        <p>Upcoming events and workshops from Innovators Hub.</p>
        <Link to="/" className={styles.link}>← Back home</Link>
      </div>
    </div>
  );
}
