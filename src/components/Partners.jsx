import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const PARTNERS = [
  { src: '/Images/bc_acm.svg', alt: 'BC ACM', span: 'col-span-1' },
  { src: '/Images/uwb_logo.png', alt: 'UWB', span: 'col-span-2' },
  { src: '/Images/uwb_acm.png', alt: 'UWB ACM', span: 'col-span-1' },
  { src: '/Images/Asset_24x.png', alt: 'Partner', span: 'col-span-1' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Partners() {
  return (
    <section className={styles.section}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>Backed By</h2>
      </motion.div>

      <motion.div 
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {PARTNERS.map((p, i) => (
          <motion.div 
            key={i} 
            className={`${styles.bentoCard} ${p.alt === 'UWB' ? styles.wide : ''}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className={styles.logoWrapper}>
              <img src={p.src} alt={p.alt} />
            </div>
            <span className={styles.label}>{p.alt}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
