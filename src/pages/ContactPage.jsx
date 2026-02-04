import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';

export default function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: '', type: '' });

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible); },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
      setStatus({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }
    setStatus({ message: 'Sending...', type: 'info' });
    try {
      const res = await fetch('https://formspree.io/f/xblgzzol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus({ message: "Message sent! We'll get back to you soon.", type: 'success' });
        form.reset();
      } else {
        setStatus({ message: 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch {
      setStatus({ message: 'Failed to send. Please try again.', type: 'error' });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>Contact <span>Us</span></h1>
        <p className={styles.subtitle}>Questions, ideas, or just want to say hello? We'd love to hear from you.</p>
        <Link to="/" className={styles.backLink}>← Back home</Link>
      </section>

      <section className={styles.section}>
        <div className={`${styles.sectionReveal} ${styles.card}`} ref={formRef} style={{ maxWidth: '500px' }}>
          <h2 className={styles.cardTitle} style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Talk with <span>us</span></h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" name="name" placeholder="Your name" required style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(252,101,32,0.3)', background: '#0A0A0A', color: 'var(--white)', fontSize: '1rem' }} />
            <input type="email" name="email" placeholder="Your email" required style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(252,101,32,0.3)', background: '#0A0A0A', color: 'var(--white)', fontSize: '1rem' }} />
            <textarea name="message" placeholder="Your message" required rows={4} style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(252,101,32,0.3)', background: '#0A0A0A', color: 'var(--white)', fontSize: '1rem', resize: 'vertical' }} />
            <button type="submit" className={styles.btn} style={{ alignSelf: 'center', padding: '0.75rem 2rem' }}>Send Message</button>
          </form>
          {status.message && (
            <p style={{ marginTop: '1rem', textAlign: 'center', color: status.type === 'success' ? 'var(--orange)' : status.type === 'error' ? '#ef4444' : 'var(--gray-text)', fontSize: '0.95rem' }}>{status.message}</p>
          )}
        </div>
        <p style={{ marginTop: '1.5rem', color: 'var(--gray-text)', fontSize: '0.95rem' }}>Or email us at <a href="mailto:innovatorshub@uw.edu" style={{ color: 'var(--orange)' }}>innovatorshub@uw.edu</a></p>
      </section>
    </div>
  );
}
