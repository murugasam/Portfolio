import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../data/portfolioData';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref}>
      <div className="container">
        <div className="row gy-5">
          {/* Header */}
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label">Career</div>
              <div className="section-divider" />
              <h2 className="section-title">Experience &amp; Journey</h2>
              <p className="section-desc">
                My professional journey building and shipping real-world software.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="col-lg-7">
            <div className="timeline">
              {experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.18 }}
                >
                  <div className="timeline-dot" />
                  <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
                    <div className="timeline-date">{item.date}</div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-company">@ {item.company}</div>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div className="col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Education */}
              <div className="glass-card mb-4">
                <h5 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-light)' }}>
                  🎓 Education
                </h5>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    B.Sc. Computer Science
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 4 }}>
                    2021 – 2024
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: 6 }}>
                    Strong foundation in data structures, algorithms, DBMS, and web technologies.
                    Participated in hackathons and technical symposiums.
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-card">
                <h5 style={{ fontWeight: 700, marginBottom: '1rem', color: 'var(--accent-light)' }}>
                  🏆 Certifications
                </h5>
                {[
                  { name: 'MERN Stack Development', year: '2025', icon: '🌐' },
                  { name: 'React & TypeScript Mastery', year: '2025', icon: '⚛️' },
                  { name: 'MongoDB Developer Path', year: '2025', icon: '🍃' },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '10px 0',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    <span style={{ fontSize: '1.3rem' }}>{cert.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{cert.name}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{cert.year}</div>
                    </div>
                    <span
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent-light)',
                        padding: '2px 10px',
                        borderRadius: 50,
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        border: '1px solid var(--border)',
                      }}
                    >
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
