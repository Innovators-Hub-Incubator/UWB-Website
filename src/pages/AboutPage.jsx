import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowLeft } from 'lucide-react';
import styles from './InnerPage.module.css';

const TEAM = [
  { name: 'Justin Liao', role: 'Co-President', img: '/Images/image.png', linkedin: 'https://www.linkedin.com/in/justin-liao23/' },
  { name: 'Ethan Leonard', role: 'Co-President', img: '/Images/image (1).png', linkedin: 'https://www.linkedin.com/in/ethan-s-leonard/' },
  { name: 'Tamir Michaely', role: 'Secretary', img: '/Images/image (2).png', linkedin: 'https://www.linkedin.com/in/tamir-michaely/' },
  { name: 'Jane Choi', role: 'Chief Designer', img: '/Images/image (3).png', linkedin: 'https://www.linkedin.com/in/jane026/' },
  { name: 'Manish Ram', role: 'Project Manager', img: '/Images/image (4).png', linkedin: 'https://www.linkedin.com/in/manishram-saravanan/' },
  { name: 'Aryan Khanna', role: 'Tech Lead', img: '/Images/image (5).png', linkedin: 'https://www.linkedin.com/in/aryankhanna9/' },
  { name: 'Roger Stanev', role: 'Advisor', img: '/Images/image (6).png', linkedin: 'https://www.linkedin.com/in/rstanev/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <section className={styles.section}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>
            Welcome to <span className={styles.highlight}>UWB Innovators Hub</span>
          </h1>
          <p className={styles.subtitle}>
            At Innovators Hub, we inspire our community of ambitious <strong className={styles.highlightText}>entrepreneurs, builders, and innovators</strong> to resolve problems in the world by turning their crazy ideas into reality. Together, we defy the odds.
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.cardTitle}>What We <span className={styles.highlightText}>Provide</span></h2>
          <ul className={styles.featureList}>
            <li><strong className={styles.highlightText}>Discussion Forum:</strong> Engage in lively talks during our entrepreneurial and networking events with startup founders, industry speakers, and student innovators.</li>
            <li><strong className={styles.highlightText}>Events:</strong> Private company tours, local tech conferences, hackathons, and exclusive experiences beyond campus.</li>
            <li><strong className={styles.highlightText}>Workshops:</strong> Enhance your skills with industry leaders in software engineering, law, design, and business.</li>
            <li><strong className={styles.highlightText}>Launchpad:</strong> Our 5-week accelerator/incubator program takes you from ideation to launch, with mentorship and workshops until Demo Day.</li>
          </ul>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.cardTitle}>Our <span className={styles.highlightText}>Mission</span></h2>
          <p className={styles.missionText}>
            We foster a community where ambition, passion, and innovation come together. By offering resources, support, and a network of like-minded peers, we help bring bold ideas to life, resolving real-world problems and creating impactful value for the world.
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet our <span className={styles.highlightText}>Team</span>
        </motion.h2>

        <motion.div 
          className={styles.teamGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TEAM.map((person, i) => (
            <motion.a 
              key={i} 
              href={person.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.teamCard}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'var(--orange)' }}
            >
              <div className={styles.imageWrapper}>
                <img src={person.img} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <Linkedin size={16} className={styles.linkedInIcon} />
            </motion.a>
          ))}
        </motion.div>
        
        <Link to="/" className={styles.bottomBackLink}>
          <ArrowLeft size={18} /> Back home
        </Link>
      </section>
    </div>
  );
}
