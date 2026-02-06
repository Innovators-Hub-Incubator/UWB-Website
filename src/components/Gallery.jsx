import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

const GALLERY_ITEMS = [
  { src: '/Gallery Images/1746042265405.png', caption: 'Launchpad Week 1 · 2025' },
  { src: '/Gallery Images/1746042307507.png', caption: 'Launchpad Week 2 · 2025' },
  { src: '/Gallery Images/20250211_134530.jpg', caption: 'First Meeting · 2025' },
  { src: '/Gallery Images/20250307_153232.jpg', caption: 'Valve HQ Tour · 2025' },
  { src: '/Gallery Images/DSC04949_1.jpg', caption: 'T-Mobile Tour · 2025' },
  { src: '/Gallery Images/DSC04995_1.jpg', caption: 'T-Mobile Tour · 2025' },
  { src: '/Gallery Images/IMG_3533.jpg', caption: 'Valve HQ Tour · 2025' },
  { src: '/Gallery Images/IMG_3869.jpg', caption: 'Expedia Tour · 2025' },
  { src: '/Gallery Images/IMG_3877.jpg', caption: 'Expedia Tour · 2025' },
  { src: '/Gallery Images/PXL_20251010_173649770.png', caption: 'Google Tour · 2025' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.header}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Capturing moments of innovation.
        </motion.p>
      </div>

      <div className={styles.masonryGrid}>
        {GALLERY_ITEMS.map((item, index) => (
          <motion.div 
            key={index}
            className={styles.gridItem}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            onClick={() => setSelectedImage(item)}
            whileHover={{ y: -5 }}
          >
            <div className={styles.imageWrapper}>
              <img src={item.src} alt={item.caption} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.viewLabel}>VIEW</span>
                <span className={styles.caption}>{item.caption}</span>
              </div>
              <div className={styles.hoverIcon}>
                <ZoomIn size={32} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className={styles.lightboxContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.caption} />
              <div className={styles.lightboxCaption}>
                {selectedImage.caption}
              </div>
              <button 
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
