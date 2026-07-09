import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiMail } from 'react-icons/fi';
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import murugaImg from '../assets/muruga.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Hero: React.FC = () => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToProjects = () =>
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero-section">
      {/* Background Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left: Text */}
          <div className="col-lg-6">
            <motion.div {...fadeUp(0.1)}>
              <div className="hero-badge">
                <span className="dot" />
                Available for Hire
              </div>
            </motion.div>

            <motion.h1 className="hero-title" {...fadeUp(0.2)}>
              Hi, I'm{' '}
              <span className="highlight">{personalInfo.name}</span>
              <br />
              {personalInfo.role}
            </motion.h1>

            <motion.p className="hero-subtitle" {...fadeUp(0.3)}>
              {personalInfo.tagline}. I craft clean, performant, and
              delightful digital experiences from front to back.
            </motion.p>

            <motion.div className="hero-cta" {...fadeUp(0.4)}>
              <button
                className="btn-primary-custom"
                onClick={scrollToContact}
                id="hero-hire-btn"
              >
                <FiMail style={{ marginRight: 8 }} />
                Hire Me
              </button>

              <a
                className="btn-outline-custom"
                href={personalInfo.resumeUrl}
                download
                id="hero-resume-btn"
              >
                <FiDownload />
                Download CV
              </a>

              <button
                className="btn-outline-custom"
                onClick={scrollToProjects}
                id="hero-projects-btn"
              >
                View Work
              </button>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.5)}>
              {[
                { number: personalInfo.yearsExp, label: 'Level' },
                { number: personalInfo.projectsDone, label: 'Projects Done' },
                { number: personalInfo.techCount, label: 'Technologies' },
              ].map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <div className="col-lg-6 d-flex justify-content-center">
            <motion.div
              className="hero-avatar-wrapper"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="avatar-glow" />
              <div className="avatar-ring">
                <img src={murugaImg} alt="Muruganandhan" className="avatar-img" />
              </div>

              {/* Floating badges */}
              {[
                { label: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
                { label: 'CSS3', icon: <SiCss color="#1572B6" /> },
                { label: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
                { label: 'React.js', icon: <SiReact color="#61DAFB" /> },
                { label: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
                { label: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
                { label: 'Python', icon: <SiPython color="#3776AB" /> },
              ].map((badge, index) => {
                const angle = index * (360 / 7) * (Math.PI / 180); // ~51.43 degrees apart for 7 items
                const radius = 200; // distance from center
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                return (
                  <motion.div
                    key={badge.label}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      background: 'var(--bg-glass)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '8px 14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                    }}
                  >
                    <span>{badge.icon}</span>
                    {badge.label}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="text-center mt-5 pt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={() =>
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="border-0 bg-transparent"
            style={{ color: 'var(--text-muted)', cursor: 'pointer' }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <FiArrowDown size={22} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
