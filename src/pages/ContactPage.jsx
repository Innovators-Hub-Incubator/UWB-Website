import { Link } from 'react-router-dom';
import styles from './PlaceholderPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1>Contact</h1>
        <p>Get in touch: <a href="mailto:innovatorshub@uw.edu" className={styles.email}>innovatorshub@uw.edu</a></p>
        <Link to="/" className={styles.link}>← Back home</Link>
      </div>
    </div>
  );
}
