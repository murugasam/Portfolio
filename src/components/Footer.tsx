import { motion } from 'framer-motion';
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp,
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: <FiGithub />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FiLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <FiTwitter />, href: personalInfo.twitter, label: 'Twitter' },
    { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      {/* Back to Top */}
      <motion.button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        title="Back to top"
        id="back-to-top-btn"
      >
        <FiArrowUp />
      </motion.button>

      <footer className="footer">
        <div className="container">
          {/* Brand */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="navbar-brand-custom"
              style={{ fontSize: '1.8rem', display: 'inline-block' }}
            >
              &lt;{personalInfo.name} /&gt;
            </div>
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.88rem',
                maxWidth: 400,
                margin: '0.75rem auto 0',
                lineHeight: 1.7,
              }}
            >
              Full Stack Developer · Building scalable web experiences
            </p>
          </motion.div>

          {/* Nav Links */}
          <motion.div
            className="d-flex justify-content-center flex-wrap gap-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() =>
                  document
                    .getElementById(link.toLowerCase())
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="border-0 bg-transparent"
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--accent-light)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--text-muted)')
                }
              >
                {link}
              </button>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            className="footer-social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="social-link"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background:
                'linear-gradient(90deg, transparent, var(--border), transparent)',
              margin: '1.5rem 0',
            }}
          />

          {/* Copyright */}
          <motion.p
            style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {year}{' '}
            <span style={{ color: 'var(--accent-light)', fontWeight: 600 }}>
              {personalInfo.name}
            </span>
            . Built with ⚛️ React · 🎞️ Framer Motion · 🅱️ Bootstrap
          </motion.p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
