import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const About: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: <FiCode size={24} />,
      title: 'Clean Code',
      desc: 'I write readable, maintainable code following SOLID principles and best practices.',
    },
    {
      icon: <FiLayers size={24} />,
      title: 'Full Stack',
      desc: 'From pixel-perfect UIs to robust backend APIs — I handle the entire stack.',
    },
    {
      icon: <FiZap size={24} />,
      title: 'Performance',
      desc: 'Obsessed with speed. I optimize for Core Web Vitals and seamless user experience.',
    },
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <div className="row gy-5 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-label">About Me</div>
              <div className="section-divider" />
              <h2 className="section-title">
                Passionate Developer,<br />
                <span style={{ color: 'var(--accent-light)' }}>Problem Solver</span>
              </h2>
              <p className="section-desc mb-4">
                Hey! I'm <strong style={{ color: 'var(--accent-light)' }}>{personalInfo.name}</strong>,
                a Full Stack Developer based in {personalInfo.location}.
                I specialise in building scalable web applications using modern
                JavaScript ecosystems — React on the front, Node.js on the back.
              </p>
              <p className="section-desc mb-4">
                I believe great software is born at the intersection of elegant
                design and solid engineering. Every line of code I write aims to
                deliver real value — fast, accessible, and maintainable.
              </p>
              <p className="section-desc mb-4" style={{ fontFamily: 'Fira Code, monospace', fontSize: '0.88rem', color: 'var(--accent-light)' }}>
                const me = &#123; learning: true, coffee: '∞', bugs: 0 &#125;;
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <button
                  className="btn-primary-custom"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  id="about-hire-btn"
                >
                  💼 Hire Me
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-outline-custom"
                  id="about-email-btn"
                >
                  ✉️ {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Cards */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="glass-card d-flex gap-4 align-items-start"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'var(--accent-glow)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-light)',
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, marginBottom: 6 }}>{card.title}</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
