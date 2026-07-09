import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Experience from './components/Experience';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Apply theme attribute on mount & change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {/* ── Scroll Progress ── */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
          transformOrigin: '0%',
          zIndex: 9999,
        }}
      />

      {/* ── Navigation ── */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* ── Sections ── */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

export default App;
