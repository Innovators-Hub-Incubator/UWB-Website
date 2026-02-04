import styles from './CTA.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';

export default function CTA() {
  return (
    <section className={`${styles.section} snap-section`}>
      <a href={JOIN_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
        Join Us
      </a>
    </section>
  );
}
