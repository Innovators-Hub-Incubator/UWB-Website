import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, ArrowLeft, ArrowUpRight, Calendar, MapPin, Clock } from 'lucide-react';
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
            {link.type === 'instagram' && <Instagram size={14} />}
            {link.type === 'linkedin' && <Linkedin size={14} />}
            {link.type === 'youtube' && <Youtube size={14} />}
            <span>
              {link.type === 'instagram' ? 'Instagram' : link.type === 'linkedin' ? 'LinkedIn' : link.type === 'youtube' ? 'YouTube' : link.label}
            </span>
            {(!link.internal && link.type !== 'instagram' && link.type !== 'linkedin' && link.type !== 'youtube') && <ArrowUpRight size={14} />}
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

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function EventsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.bgGrid} />
      
      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.heroTitle}>Events</h1>
          <p className={styles.subtitle}>
            Explore our upcoming and past events—company tours, hackathons, networking, and more. Every event is designed to inspire, connect, and empower innovators like you.
          </p>
        </motion.div>
      </section>

      <section className={styles.section} style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', width: '100%' }}>
          {EVENT_SECTIONS.map((section, idx) => (
            <motion.div 
              key={section.season}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.h2 
                className={eventStyles.seasonTitle}
                variants={cardVariants}
              >
                <span>{section.season}</span>
              </motion.h2>
              
              <div className={eventStyles.eventList}>
                {section.events.map((event, i) => (
                  <motion.div
                    key={`${section.season}-${i}`}
                    className={eventStyles.eventCard}
                    variants={cardVariants}
                  >
                    <div className={eventStyles.cardHeader}>
                      <span className={eventStyles.dateTag}>{event.date}</span>
                      <h3 className={eventStyles.eventTitle}>{event.title}</h3>
                    </div>
                    
                    <p className={eventStyles.eventCardDesc}>
                      {event.desc}
                      {event.detailsHref && (
                        <> <Link to={event.detailsHref} className={eventStyles.inlineLink}>View full schedule and details →</Link></>
                      )}
                    </p>
                    
                    <div className={eventStyles.metaGrid}>
                      <div className={eventStyles.metaItem}>
                        <MapPin size={16} /> {event.location}
                      </div>
                      {event.time && (
                        <div className={eventStyles.metaItem}>
                          <Clock size={16} /> {event.time}
                        </div>
                      )}
                      {event.extra && (
                        <div className={eventStyles.metaItem}>
                          <span style={{ color: 'var(--orange)' }}>•</span> {event.extra}
                        </div>
                      )}
                    </div>
                    
                    <EventLinks links={event.links} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <Link to="/" className={styles.bottomBackLink}>
          <ArrowLeft size={18} /> Back home
        </Link>
      </section>
    </div>
  );
}
