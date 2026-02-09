import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, ArrowLeft } from 'lucide-react';
import styles from './InnovatorsPage.module.css';

const INNOVATORS = [
  { name: 'Justin Liao', linkedin: 'https://www.linkedin.com/in/justin-liao23/' },
  { name: 'Ethan Leonard', linkedin: 'https://www.linkedin.com/in/ethan-s-leonard/' },
  { name: 'Tamir Michaely', linkedin: 'https://www.linkedin.com/in/tamir-michaely/' },
  { name: 'Jane Choi', linkedin: 'https://www.linkedin.com/in/jane026/' },
  { name: 'Manish R. Saravanan', linkedin: 'https://www.linkedin.com/in/manishram-saravanan/' },
  { name: 'Aryan Khanna', linkedin: 'https://www.linkedin.com/in/aryankhanna9/' },
  { name: 'Rane Peterson', linkedin: 'https://www.linkedin.com/in/rane-peterson/' },
  { name: 'Ruslan Romanenko', linkedin: 'https://www.linkedin.com/in/ruslan-romanenko-b89088274/' },
  { name: 'Daniil Marozau', linkedin: 'https://www.linkedin.com/in/danielmorozov/' },
  { name: 'Aleeza Bhatti', linkedin: 'https://www.linkedin.com/in/aleezabhatti' },
  { name: 'Dishita Soni', linkedin: 'https://www.linkedin.com/in/dishita-soni' },
  { name: 'Veer Saini', linkedin: 'https://www.linkedin.com/in/veersaini/' },
  { name: 'Logan Bautista', linkedin: 'https://www.linkedin.com/in/loganbautista/' },
  { name: 'Alison Doak', linkedin: 'https://www.linkedin.com/in/allison-d-49a0b6249/' },
  { name: 'Diya Kamboj', linkedin: 'https://www.linkedin.com/in/diya-kamboj' },
  { name: 'Aleena Khan', linkedin: 'https://www.linkedin.com/in/aleenaamankhan' },
  { name: 'Angelino dela Cruz', linkedin: 'https://www.linkedin.com/in/angelino-delacruz/' },
  { name: 'Seyeon Park', linkedin: 'https://www.linkedin.com/in/seyeon-park77' },
  { name: 'Areej Hasan', linkedin: 'https://www.linkedin.com/in/areej-hassann' },
  { name: 'Davina Loekito', linkedin: 'https://www.linkedin.com/in/davina-loekito' },
  { name: 'Dhanshika Vijayaraj', linkedin: 'https://www.linkedin.com/in/dhanshika-vijayaraj' },
  { name: 'Howard Cheng', linkedin: 'https://www.linkedin.com/in/howard-ch' },
  { name: 'Garv Seth', linkedin: 'https://www.linkedin.com/in/garvseth/' },
  { name: 'Brandon Lowder', linkedin: 'https://www.linkedin.com/in/brandon-lowder-aa4033243/' },
  { name: 'Karsten Schmidt', linkedin: 'https://www.linkedin.com/in/karstenschmidt02' },
  { name: 'Ana Rocha', linkedin: 'https://www.linkedin.com/in/ana-rocha99/' },
  { name: 'Ashley Tsang', linkedin: 'https://www.linkedin.com/in/ashleytsang29/' },
  { name: 'Xinyu Zhu', linkedin: 'https://www.linkedin.com/in/katiezhu06/' },
  { name: 'Ayaan Ali', linkedin: 'https://www.linkedin.com/in/ayaan-ali30' },
  { name: 'Kyle Hale', linkedin: 'https://www.linkedin.com/in/kghale/' },
  { name: 'Tom Strzyz', linkedin: 'https://www.linkedin.com/in/tomstrzyz' },
  { name: 'Lidia Workneh', linkedin: 'https://www.linkedin.com/in/lidia-workneh/' },
  { name: 'Mao Nishi', linkedin: 'https://www.linkedin.com/in/maonishio/' },
  { name: 'Swanand Wagh', linkedin: 'https://www.linkedin.com/in/swanandwagh1208/' },
  { name: 'Micheal Gumayan', linkedin: 'https://www.linkedin.com/in/michael-gumayan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Hakuho Fujiwara', linkedin: 'https://www.linkedin.com/in/hakuho-fujiwara-920089223/' },
  { name: 'Zoha Fatima', linkedin: 'https://www.linkedin.com/in/zoha-fatima-8213982b3' },
  { name: 'Teju Pasula', linkedin: 'https://www.linkedin.com/in/tejaswini-pasula' },
  { name: 'Prahas Pisipati', linkedin: 'https://www.linkedin.com/in/prahas-pisipati/' },
  { name: 'Ayesha Mahmood', linkedin: 'https://www.linkedin.com/in/mahmood-ayesha' },
  { name: 'Samantha Boggs', linkedin: 'https://www.linkedin.com/in/samantha-boggs-90309a323/' },
  { name: 'Ahmed Abid', linkedin: 'https://www.linkedin.com/in/ahmed-abid-53b090203/' },
  { name: 'Ishaan Shete', linkedin: 'https://www.linkedin.com/in/ishaan-shete' },
  { name: 'Stan Bychkar', linkedin: 'https://www.linkedin.com/in/stan-bychkar/' },
  { name: 'Syed Rizvi', linkedin: 'https://www.linkedin.com/in/syedkumailrizvi' },
  { name: 'Chantell Juarez', linkedin: 'https://www.linkedin.com/in/chantell-juarez-338378333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Harsh Malik', linkedin: 'https://www.linkedin.com/in/harsh-malik1/' },
  { name: 'Wing Sun Au', linkedin: 'https://www.linkedin.com/in/wingsunau/' },
  { name: 'Nishchay Jaiswal', linkedin: 'https://www.linkedin.com/in/nishchay-jaiswal-b2329b233/' },
  { name: 'Brandon Kennedy', linkedin: 'https://www.linkedin.com/in/brandon-kennedy-6a6352335' },
  { name: 'Rishabh Singh', linkedin: 'https://www.linkedin.com/in/rishabh-singh-438a52222/' },
  { name: 'Srijjit Vijayaraj', linkedin: 'https://www.linkedin.com/in/srijjit-vijayaraj-1b9720282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Leo Totonchi', linkedin: 'https://www.linkedin.com/in/leo-t-666b87252/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4 }
  }
};

export default function InnovatorsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <section className={styles.heroSection}>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span>Innovators</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We're proud of the people who make this club feel like home—students from different majors, each bringing their own expertise and curiosity.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
           <Link to="/about" className={styles.btn}>Meet our Team</Link>
        </motion.div>
      </section>

      <section className={styles.gridSection}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {INNOVATORS.map((person, i) => (
            <motion.a
              key={i}
              href={person.linkedin.startsWith('http') ? person.linkedin : `https://${person.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.memberCard}
              variants={cardVariants}
              whileHover={{ scale: 1.05, borderColor: 'rgba(252, 101, 32, 0.5)' }}
            >
              <Linkedin size={18} className={styles.cardIcon} />
              <span className={styles.cardName}>{person.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
