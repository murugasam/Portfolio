import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Technical Skills</div>
          <div className="section-divider mx-auto" />
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-desc mx-auto text-center">
            Technologies I work with to build robust, modern applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="row gy-4">
          {skills.map((cat, catIdx) => (
            <div className="col-md-6" key={cat.category}>
              <motion.div
                className="glass-card h-100"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: catIdx * 0.12 }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span style={{ fontSize: '1.8rem' }}>{cat.icon}</span>
                  <span className="skill-category-title mb-0">{cat.category}</span>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {cat.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: catIdx * 0.1 + i * 0.06 + 0.3 }}
                      whileHover={{ scale: 1.06 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Fun fact banner */}
        <motion.div
          className="glass-card mt-5 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))',
            borderColor: 'var(--border-hover)',
          }}
        >
          <p
            style={{
              fontFamily: 'Fira Code, monospace',
              fontSize: '1rem',
              color: 'var(--accent-light)',
              margin: 0,
            }}
          >
            🚀 &nbsp;Always learning. Currently exploring:{' '}
            <strong>AWS, Docker, System Design</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
