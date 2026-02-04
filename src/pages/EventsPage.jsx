import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './InnerPage.module.css';
import eventStyles from './EventsPage.module.css';

// Link types: instagram | linkedin | primary | neutral | youtube, plus href and optional label
const EVENT_SECTIONS = [
  {
    season: 'Autumn 2026',
    events: [
      {
        date: 'OCT 10',
        title: 'Company Tour: Google Kirkland',
        desc: "An extremely rare opportunity to see the inside of Google's offices! Join us for an exclusive tour of Google's Kirkland campus—their second largest campus after their Bay Area headquarters. Google normally does not allow tours or outside visitors, making this a once-in-a-lifetime experience. Parking is free for visitors but limited, so carpools will be available!",
        location: 'Google Kirkland Campus',
        time: '10:00 - 11:00 AM',
        extra: 'Free Parking (Limited)',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/p/DQFaSirkoqO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
          { type: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7386500170533801984' },
        ],
      },
    ],
  },
  {
    season: 'Spring 2025',
    events: [
      {
        date: 'JUN 3',
        title: 'Launchpad S25 Demo Day',
        desc: "Join us for the grand finale of Launchpad S25! Watch 20+ teams showcase their innovative projects in 2-minute pitches. After the demos, join us for a fireside chat with Ehud Halberstam, CEO of Chordio (YC S22), who's creating AI tools that accelerate UX design from idea to wireframe. We'll wrap up with networking, food, and an after-party featuring badminton, karaoke, and a night of fun! Come support the teams and see what the next generation of builders is working on.",
        location: 'DISC 061',
        time: '1:00 - 5:00 PM',
        detailsHref: '/demo-day',
        links: [
          { type: 'primary', href: '/demo-day', label: 'Event Details', internal: true },
          { type: 'primary', href: 'https://lu.ma/mjtnuoun?tk=nSl33E', label: 'RSVP Now' },
          { type: 'neutral', href: '/launchpads', label: 'Learn More', internal: true },
        ],
      },
      {
        date: 'APR 25-27',
        title: 'UWB Hacks 2025: Save the World',
        desc: "Innovators Hub co-hosted UWB Hacks 2025, a weekend-long hackathon with the theme \"Save the World.\" Students from UWB and beyond formed teams to build innovative projects across six tracks: Business, Personal Development, Entertainment, Biotech, Government, and Security. The event featured workshops, fireside chats with industry leaders including Cameron Bielstein from Allen Institute and Armora Rama from ThinkCyber/Microsoft, networking opportunities, and fun activities like photo ops with Holly the Husky and badminton socials.",
        location: 'UW Bothell ARC & NCEC',
        time: '3-Day Hackathon',
        links: [
          { type: 'primary', href: 'https://www.uwbhacks.com/', label: 'Event Website' },
          { type: 'neutral', href: 'https://www.uwbhacks.com/', label: 'UWB ACM' },
        ],
      },
      {
        date: 'APR 18',
        title: 'Company Tour: T-Mobile',
        desc: "Join Innovators Hub for a visit to T-Mobile's innovation center to see how a telecommunications company is innovating for the future. Meet inspiring team members like Candice Boyd, Nevin Remedios, and Hanah Snow as they share what it's like to be part of the team at T-Mobile.",
        location: '1705 136th PL NE Bellevue, WA',
        time: '1:30 - 2:30 PM',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/p/DIt5DxnzCNO/?img_index=1' },
          { type: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7320136751010787328/' },
          { type: 'neutral', href: 'https://www.techexperience.com/', label: 'T-Mobile' },
        ],
      },
      {
        date: 'APR 2',
        title: 'Company Tour: Expedia',
        desc: "Join Innovators Hub for a visit to Expedia's airport-themed campus in Seattle—complete with indoor roads and travel-inspired design. Hear from leaders like Marcus Birney, Gemma Barajas, and VP Emil as they share what it's like to work at Expedia.",
        location: 'Expedia Group, 1111 Expedia Group Wy W, Seattle, WA 98119',
        time: '2 - 3 PM',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/p/DIM5myKhAw-/?img_index=1' },
          { type: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7315433280189669376/' },
          { type: 'neutral', href: 'https://expediagroup.com/', label: 'Expedia Group' },
        ],
      },
    ],
  },
  {
    season: 'Winter 2025',
    events: [
      {
        date: 'MAR 7',
        title: 'Company Tour: Valve',
        desc: "Join Innovators Hub for an exclusive tour of Valve, the parent company of Steam. Discover how software, hardware, and audio engineering power iconic games like Half-Life and Team Fortress 2, and learn about Valve's workspace and innovative work culture.",
        location: 'Valve HQ, Bellevue, WA',
        time: '2 - 3 PM',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/p/DG_WYQWydRo/?img_index=1' },
          { type: 'linkedin', href: 'https://www.linkedin.com/posts/innovators-hub-incubator_valve-steam-innovation-activity-7304596120670715904-ZyHv/?utm_source=share&utm_medium=member_ios&rcm=ACoAAEZqj-gBKLiytH8UF5DEfADF8Pv13_WJNX8v' },
          { type: 'neutral', href: 'https://www.valvesoftware.com/en/', label: 'Valve Corp' },
        ],
      },
      {
        date: 'FEB 11',
        title: 'Kickoff Event 🚀',
        desc: "Kick off the year with UWB Innovators Hub! Meet the team, connect with fellow builders, and discover opportunities like our Launchpad program and upcoming exclusive events.",
        location: 'UW1 220',
        time: '1:15 - 2:30 PM',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/uwb_innovatorshub/p/DF-r1r5JuK6/?img_index=1' },
          { type: 'linkedin', href: 'https://www.linkedin.com/posts/innovators-hub-incubator_startup-entrepreneurship-foubders-activity-7295487915273375745-lxWi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZqj-gBKLiytH8UF5DEfADF8Pv13_WJNX8' },
          { type: 'primary', href: '/launchpads', label: 'Launchpad Page', internal: true },
        ],
      },
    ],
  },
  {
    season: 'Fall 2024',
    events: [
      {
        date: 'OCT 31',
        title: 'Costco IT Open House',
        desc: "Join us with Bellevue College ACM for an exclusive visit to Costco HQ in Issaquah. Get to connect with their team managers and recruiter, gaining insider tips on their internship program and culture.",
        location: 'Issaquah, WA 98027',
        time: '9 AM - 12 PM',
        links: [
          { type: 'neutral', href: 'https://www.bellevuecollegeacm.org/events', label: 'BC ACM' },
        ],
      },
      {
        date: 'OCT 20',
        title: 'UWB Branch Launch',
        desc: "Official launch of the Innovators Hub branch at UW Bothell. We bring together aspiring founders and developers to build innovative projects that resolve real-world problems.",
        location: 'University of Washington Bothell',
        links: [
          { type: 'instagram', href: 'https://www.instagram.com/p/DFHpACIx7-L/' },
          { type: 'primary', href: 'https://www.innovatorshub.us/', label: 'Bellevue Branch' },
        ],
      },
    ],
  },
  {
    season: 'Spring 2024 (Bellevue Branch)',
    events: [
      {
        date: 'JUN 8-9',
        title: 'BC Hacks24',
        desc: "Back in Bellevue, we teamed up with BC's tech clubs to host the first-ever BC Hacks—a beginner-friendly hackathon focused on building solutions around productivity. Had over 140 participants from BC, UW, and local high schools—marking a milestone in student-led hackathons at Bellevue College.",
        location: 'Bellevue College U301',
        time: '2-days',
        links: [
          { type: 'linkedin', href: 'https://www.linkedin.com/posts/bc-tech-club_hackathon-mentorship-education-activity-7206377289763160065-fX7L/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZqj-gBKLiytH8UF5DEfADF8Pv13_WJNX8' },
          { type: 'neutral', href: 'https://bc-hacks-2024.devpost.com/', label: 'Devpost' },
          { type: 'primary', href: 'https://www.bchacks.dev/', label: 'Webpage' },
        ],
      },
      {
        date: 'MAY 31',
        title: 'AI Entrepreneurial & Networking Event',
        desc: "We brought together 140+ students, founders, and industry pros for a night of pitches, networking, and AI innovation. Y Combinator-backed founders like Prem Kumar and Ehud Halberstam shared real startup insights, with judges from Microsoft offering valuable feedback.",
        location: 'Bellevue College',
        time: '1 - 3 PM',
        links: [
          { type: 'youtube', href: 'https://www.youtube.com/watch?v=LVSiIHz8T_s', label: 'Full Video' },
          { type: 'instagram', href: 'https://www.instagram.com/p/C7zgG5TyhL8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D' },
          { type: 'linkedin', href: 'https://www.linkedin.com/feed/update/urn:li:activity:7203806463272574976/' },
        ],
      },
    ],
  },
];

function EventLinks({ links }) {
  return (
    <div className={eventStyles.eventLinks}>
      {links.map((link, i) => {
        const className = `${eventStyles.linkPill} ${eventStyles['linkPill_' + link.type]}`;
        const content = (
          <>
            {link.type === 'instagram' && (
              <img src="/Images/instagram.svg" alt="" className={eventStyles.linkPillIcon} aria-hidden />
            )}
            {link.type === 'linkedin' && (
              <img src="/Images/linkedin-brands.svg" alt="" className={eventStyles.linkPillIcon} aria-hidden />
            )}
            <span>
              {link.type === 'instagram' ? 'Instagram' : link.type === 'linkedin' ? 'LinkedIn' : link.label}
            </span>
          </>
        );
        if (link.internal) {
          return (
            <Link key={i} to={link.href} className={className}>
              {content}
            </Link>
          );
        }
        return (
          <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
          </a>
        );
      })}
    </div>
  );
}

export default function EventsPage() {
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

  let refIndex = 0;

  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} aria-hidden />
      <section className={styles.section}>
        <h1 className={styles.heroTitle}><span>Events</span></h1>
        <p className={styles.subtitle}>
          Explore our upcoming and past events—company tours, hackathons, networking, and more. Every event is designed to inspire, connect, and empower innovators like you.
        </p>
        <Link to="/" className={styles.backLink}>← Back home</Link>
      </section>

      <section className={styles.section} style={{ justifyContent: 'flex-start', paddingTop: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '700px', width: '100%' }}>
          {EVENT_SECTIONS.map((section) => (
            <div key={section.season}>
              <h2 className={`${eventStyles.seasonTitle} ${styles.sectionReveal}`} ref={(el) => (revealRefs.current[refIndex++] = el)}>
                <span>{section.season}</span>
              </h2>
              <div className={eventStyles.eventList}>
                {section.events.map((event, i) => (
                  <div
                    key={`${section.season}-${i}`}
                    className={`${styles.sectionReveal} ${styles.card}`}
                    ref={(el) => (revealRefs.current[refIndex++] = el)}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span className={styles.btn} style={{ padding: '0.35rem 0.75rem', fontSize: '0.9rem' }}>{event.date}</span>
                      <strong style={{ fontSize: '1.15rem' }}>{event.title}</strong>
                    </div>
                    <p className={eventStyles.eventCardDesc}>
                      {event.desc}
                      {event.detailsHref && (
                        <> <Link to={event.detailsHref}>View full schedule and details →</Link></>
                      )}
                    </p>
                    <p className={eventStyles.eventMeta}>
                      📍 {event.location}
                      {event.time && ` · 🕒 ${event.time}`}
                      {event.extra && ` · ${event.extra}`}
                    </p>
                    <EventLinks links={event.links} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className={styles.backLink} style={{ marginTop: '2rem' }}>← Back home</Link>
      </section>
    </div>
  );
}
