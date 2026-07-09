import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  emoji: string;
  gradient: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 40 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-hover)',
          borderRadius: 20,
          maxWidth: 540,
          width: '100%',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-accent)',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            height: 180,
            background: project.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '5rem',
            position: 'relative',
          }}
        >
          {project.emoji}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(0,0,0,0.4)',
              border: 'none',
              color: '#fff',
              width: 36,
              height: 36,
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FiX />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          <div className="project-tags mb-3">
            {project.tags.map((t) => (
              <span key={t} className="project-tag">{t}</span>
            ))}
          </div>
          <h3 style={{ fontWeight: 800, marginBottom: '1rem' }}>{project.title}</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            {project.description}
          </p>
          <div
            style={{
              background: 'var(--accent-glow)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--accent-light)' }}>Key Features:</strong> Authentication,
              REST API integration, responsive design, real-time updates, and comprehensive testing.
            </p>
          </div>
          <div className="project-links">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-project btn-project-primary"
            >
              <FiExternalLink /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-project btn-project-outline"
            >
              <FiGithub /> View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const Projects: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Portfolio</div>
          <div className="section-divider mx-auto" />
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc mx-auto text-center">
            A selection of projects I've built — from idea to production.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="row gy-4">
          {projects.map((project, i) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <div
                  className="project-img"
                  style={{ background: project.gradient }}
                >
                  <span style={{ fontSize: '4rem' }}>{project.emoji}</span>
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-title">{project.title}</div>
                  <p className="project-desc">{project.description}</p>

                  <div className="project-links">
                    <button
                      className="btn-project btn-project-primary"
                      onClick={() => setSelected(project)}
                      id={`project-details-${project.id}`}
                    >
                      View Details
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project btn-project-outline"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project btn-project-outline"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/murugasam"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-custom"
            id="view-all-projects-btn"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Projects;
