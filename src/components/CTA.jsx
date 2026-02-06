import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.css';

const JOIN_URL = 'https://forms.gle/JdZJwp7SfnRxis8B9';

export default function CTA() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.headline}>
          Build the <span className={styles.outline}>future</span> with us.
        </h2>
        <motion.a 
          href={JOIN_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.btn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Join the Community</span>
          <ArrowRight size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
