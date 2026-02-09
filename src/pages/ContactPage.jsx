import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, ArrowLeft, Mail } from 'lucide-react';
import styles from './InnerPage.module.css';

export default function ContactPage() {
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <section className={styles.section} style={{ paddingTop: '6rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
          style={{ marginBottom: '2rem' }}
        >
          <h1 className={styles.heroTitle} style={{ marginBottom: '1rem' }}>
            Contact <span className={styles.highlightText}>Us</span>
          </h1>
          <p className={styles.subtitle} style={{ marginBottom: 0 }}>
            Questions, ideas, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ maxWidth: '600px' }}
        >
          <h2 className={styles.cardTitle} style={{ textAlign: 'center' }}>
            Talk with <span className={styles.highlightText}>Us</span>
          </h2>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className={styles.inputGroup}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your name" 
                required 
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                required 
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <textarea 
                name="message" 
                placeholder="Your message" 
                required 
                rows={5} 
                className={styles.textarea}
              />
            </div>
            
            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </motion.button>
          </form>

          {status.message && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${styles.statusMessage} ${styles[status.type]}`}
            >
              {status.message}
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <p style={{ color: 'var(--gray-text)', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
            Or join our Discord community at 
            <a href="https://discord.gg/jf2rnSub" className={styles.textLink} target="_blank" rel="noopener noreferrer">
              Innovators Hub
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
