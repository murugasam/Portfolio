import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin,
} from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto link and open mail client
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hi ${personalInfo.name},\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nBest regards,\n${form.name}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  const contactItems = [
    {
      icon: <FiMail size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <FiPhone size={20} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: <FiMapPin size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
    {
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muruganandhan-d',
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">Get In Touch</div>
          <div className="section-divider mx-auto" />
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc mx-auto text-center">
            Have a project in mind or just want to say hi? I'd love to hear from you.
            Fill the form and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="row gy-5">
          {/* Left: Info Cards */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="contact-info-card text-decoration-none"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  style={{ display: 'flex' }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Availability Banner */}
              <motion.div
                className="glass-card mt-3"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(6,182,212,0.08))',
                  borderColor: 'rgba(16,185,129,0.3)',
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 10px #10b981',
                      flexShrink: 0,
                      display: 'inline-block',
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        color: '#10b981',
                      }}
                    >
                      Available for Work
                    </div>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        marginTop: 2,
                      }}
                    >
                      Open to freelance &amp; full-time roles
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="col-lg-8">
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-5"
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                  <h4 style={{ fontWeight: 700, color: 'var(--accent-light)' }}>
                    Mail Client Opened!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Your default mail app has been opened with the pre-filled message.
                    Send it and I'll get back to you ASAP!
                  </p>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control"
                        rows={6}
                        placeholder="Tell me about your project, timeline, and budget..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        style={{ resize: 'vertical' }}
                      />
                    </div>
                    <div className="col-12">
                      <motion.button
                        type="submit"
                        className="btn-primary-custom w-100 d-flex align-items-center justify-content-center gap-2"
                        id="contact-submit-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={sending}
                        style={{ opacity: sending ? 0.8 : 1 }}
                      >
                        {sending ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm"
                              role="status"
                            />
                            Opening Mail Client...
                          </>
                        ) : (
                          <>
                            <FiSend /> Send Message
                          </>
                        )}
                      </motion.button>
                      <p
                        className="text-center mt-2"
                        style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}
                      >
                        🔒 This will open your default email client with a pre-filled message.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
