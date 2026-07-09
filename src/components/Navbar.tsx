import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSun, FiMoon, FiMenu, FiX,
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => document.getElementById(l.id));
      sections.forEach((sec) => {
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sec.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: 0,
          width: '100%',
        }}
        animate={{
          scaleX: scrolled
            ? Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1)
            : 0,
        }}
      />

      <nav
        className="navbar-custom w-100"
        style={{
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="container d-flex align-items-center justify-content-between py-0">
          {/* Brand */}
          <motion.button
            className="navbar-brand-custom border-0 bg-transparent p-0"
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;{personalInfo.name} /&gt;
          </motion.button>

          {/* Desktop Nav */}
          <div className="d-none d-md-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav-link-custom border-0 bg-transparent ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu */}
          <div className="d-flex align-items-center gap-2">
            <motion.button
              className="theme-btn"
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Toggle Theme"
              id="theme-toggle"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </motion.button>

            {/* Mobile Hamburger */}
            <motion.button
              className="theme-btn d-md-none"
              onClick={() => setMenuOpen((o) => !o)}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--nav-bg)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid var(--border)',
              }}
            >
              <div className="container py-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <button
                      className={`nav-link-custom border-0 bg-transparent w-100 text-start py-3 ${activeSection === link.id ? 'active' : ''}`}
                      onClick={() => scrollTo(link.id)}
                    >
                      {link.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
