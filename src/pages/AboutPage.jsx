import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export default function AboutPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observers = revealRefs.current.map((el) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.classList.add(styles.visible);
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <section className={styles.section}>
        <h1 className={styles.heroTitle}>Welcome to <span>UWB Innovators Hub</span></h1>
        <p className={styles.subtitle}>
          At Innovators Hub, we inspire our community of ambitious <strong style={{ color: 'var(--orange)' }}>entrepreneurs, builders, and innovators</strong> to resolve problems in the world by turning their crazy ideas into reality. Together, we defy the odds.
        </p>
        <Link to="/" className={styles.backLink}>← Back home</Link>
      </section>

      <section className={styles.section}>
        <div className={`${styles.sectionReveal} ${styles.card}`} ref={(el) => (revealRefs.current[0] = el)}>
          <h2 className={styles.cardTitle}>What We <span>Provide</span></h2>
          <ul>
            <li><strong style={{ color: 'var(--orange)' }}>Discussion Forum:</strong> Engage in lively talks during our entrepreneurial and networking events with startup founders, industry speakers, and student innovators.</li>
            <li><strong style={{ color: 'var(--orange)' }}>Events:</strong> Private company tours, local tech conferences, hackathons, and exclusive experiences beyond campus.</li>
            <li><strong style={{ color: 'var(--orange)' }}>Workshops:</strong> Enhance your skills with industry leaders in software engineering, law, design, and business.</li>
            <li><strong style={{ color: 'var(--orange)' }}>Launchpad:</strong> Our 5-week accelerator/incubator program takes you from ideation to launch, with mentorship and workshops until Demo Day.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.sectionReveal} ${styles.card}`} ref={(el) => (revealRefs.current[1] = el)}>
          <h2 className={styles.cardTitle}>Our <span>Mission</span></h2>
          <p>We foster a community where ambition, passion, and innovation come together. By offering resources, support, and a network of like-minded peers, we help bring bold ideas to life, resolving real-world problems and creating impactful value for the world.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heroTitle} style={{ marginBottom: '2rem' }}>Meet our <span>Team</span></h2>
        <div className={`${styles.sectionReveal} ${styles.grid}`} ref={(el) => (revealRefs.current[2] = el)}>
          {TEAM.map((person, i) => (
            <a key={i} href={person.linkedin} target="_blank" rel="noopener noreferrer" className={styles.teamCard}>
              <img src={person.img} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </a>
          ))}
        </div>
        <Link to="/" className={styles.backLink} style={{ marginTop: '2rem' }}>← Back home</Link>
      </section>
    </div>
  );
}
