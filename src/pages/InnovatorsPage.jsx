import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import gridStyles from './InnovatorsPage.module.css';

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
];

export default function InnovatorsPage() {
  const gridRef = useRef(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible); },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>Our <span>Innovators</span></h1>
        <p className={styles.subtitle}>
          We're proud of the people who make this club feel like home—students from different majors, each bringing their own expertise and curiosity.
        </p>
        <Link to="/about" className={styles.btn} style={{ marginTop: '0.5rem' }}>Meet our Team</Link>
        <Link to="/" className={styles.backLink} style={{ marginTop: '1.5rem' }}>← Back home</Link>
      </section>

      <section className={styles.section} style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
        <div
          className={`${styles.sectionReveal} ${gridStyles.grid}`}
          ref={gridRef}
        >
          {INNOVATORS.map((person, i) => (
            <a
              key={i}
              href={person.linkedin.startsWith('http') ? person.linkedin : `https://${person.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className={gridStyles.memberCard}
            >
              <img src="/Images/linkedin-brands.svg" alt="" className={gridStyles.memberCardIcon} aria-hidden />
              <span>{person.name}</span>
            </a>
          ))}
        </div>
        <Link to="/" className={styles.backLink} style={{ marginTop: '2rem' }}>← Back home</Link>
      </section>
    </div>
  );
}
