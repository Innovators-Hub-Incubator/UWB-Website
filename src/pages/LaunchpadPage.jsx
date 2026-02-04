import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';

const TIMELINE = [
  { week: 'Week 1', title: 'Ideation', color: 'var(--orange)', items: ['Kickoff workshop: market validation, user research, goal setting', 'Brainstorm with mind mapping & design thinking'] },
  { week: 'Week 2', title: 'Team Formation', color: 'var(--orange-light)', items: ['Meet other participants, form teams, outline a plan', 'Team-building activities and networking'] },
  { week: 'Week 3', title: 'Prototyping', color: 'var(--orange)', items: ['Start coding, prototyping, or designing your solution', 'Mentor check-ins & feedback from peers'] },
  { week: 'Week 4', title: 'Iteration', color: 'var(--orange-light)', items: ['Iterative testing: gather feedback, refine features', 'Midpoint workshop: product design, usability, iteration'] },
  { week: 'Week 5', title: 'Business & Pitch Prep', color: 'var(--orange)', items: ['Go-to-market plan, pricing, customer outreach', 'Pitch deck crafting and practice sessions'] },
  { week: 'Demo Day', title: 'Launch', color: 'var(--orange-light)', items: ['Pitch to investors, VCs, and community leaders', 'Showcase event: celebrate, share, network'] },
];

export default function LaunchpadPage() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observers = revealRefs.current.map((el) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.visible); },
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
        <h1 className={styles.heroTitle}><span>Launchpad</span></h1>
        <p className={styles.subtitle}>6 Weeks to Launch Your Startup Project</p>
        <p className={styles.subtitle} style={{ fontSize: '1rem', marginTop: 0 }}>
          Mentorship, workshops, and a final Demo Day to launch your startup with founders, potential investors, and our engineering community.
        </p>
        <a href="https://lu.ma/mjtnuoun?tk=nSl33E" target="_blank" rel="noopener noreferrer" className={styles.btn} style={{ marginTop: '0.5rem' }}>RSVP for 2025 Demo Day</a>
        <Link to="/" className={styles.backLink} style={{ marginTop: '1.5rem' }}>← Back home</Link>
      </section>

      <section className={styles.section} style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
        <h2 className={styles.heroTitle} style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Timeline & <span>Highlights</span></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '700px', width: '100%' }}>
          {TIMELINE.map((item, i) => (
            <div key={i} className={`${styles.sectionReveal} ${styles.card}`} ref={(el) => (revealRefs.current[i] = el)} style={{ borderLeft: `4px solid ${item.color}` }}>
              <h3 style={{ color: item.color, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.week}: {item.title}</h3>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--gray-text)' }}>
                {item.items.map((bullet, j) => (
                  <li key={j} style={{ marginBottom: '0.35rem' }}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link to="/" className={styles.backLink} style={{ marginTop: '2rem' }}>← Back home</Link>
      </section>
    </div>
  );
}
