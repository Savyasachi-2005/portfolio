import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// Using direct fetch to Formspree endpoint – no hook import needed.

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formId) {
      setError('Form not configured. Add VITE_FORMSPREE_FORM_ID to your .env file.');
      return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _subject: formState.subject || 'New portfolio contact',
        })
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Failed to send. Try again later.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section w-full min-h-screen pt-28 pb-20 relative overflow-hidden">
      {/* Background effect - Full viewport coverage */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, var(--accent) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        ></div>
        {/* Glowing orbs */}
        <motion.div 
          className="absolute -left-20 top-40 w-80 h-80 rounded-full opacity-5 blur-3xl"
          style={{ background: 'var(--accent)' }}
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute right-0 bottom-40 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{ background: 'var(--accent-glow)' }}
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
      </div>
      
  <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-4 font-orbitron text-theme-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-theme-accent">Touch</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-theme-accent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 mx-auto text-theme-text-alt text-base max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Feel free to reach out to me for collaborations, opportunities, or just to say hi!
          </motion.p>
          {!formId && (
            <div className="mt-4 text-amber-400 text-xs bg-amber-500/10 inline-block px-3 py-1 rounded">
              Add VITE_FORMSPREE_FORM_ID to enable live submissions.
            </div>
          )}
        </div>

  {/* Main Content Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[2fr_1.4fr_1fr] gap-8 xl:gap-10 w-full">
          {/* Contact Form - Left Side */}
          <motion.div
            className="bg-theme-card-bg/80 backdrop-blur-sm p-6 rounded-lg border border-theme-accent/30 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4 text-theme-accent">✓</div>
                <h3 className="text-2xl font-bold mb-2 text-theme-text">Thank You!</h3>
                <p className="text-theme-text-alt mb-4">Your message has been sent successfully.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-theme-button-bg text-white rounded-md hover:bg-theme-button-hover transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-theme-text mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-theme-bg/20 border border-theme-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-colors text-theme-text text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-theme-text mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-theme-bg/20 border border-theme-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-colors text-theme-text text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-theme-text mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-theme-bg/20 border border-theme-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-colors text-theme-text text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-theme-text mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-theme-bg/20 border border-theme-accent/30 rounded-md focus:outline-none focus:ring-2 focus:ring-theme-accent focus:border-transparent transition-colors resize-none text-theme-text text-sm"
                  />
                </div>
                
                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md bg-theme-button-bg text-white font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-theme-button-hover hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Information - Middle Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center justify-center lg:justify-start text-theme-text">
                <span className="w-4 h-1 bg-theme-accent mr-2"></span>
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Savyasachi-2005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 bg-theme-card-bg/80 backdrop-blur-sm rounded-lg border border-theme-accent/30 hover:border-theme-accent/50 transition-all duration-300 hover:bg-theme-card-hover hover:scale-[1.02]"
                >
                  <FaGithub className="w-5 h-5 text-theme-accent mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-theme-text text-sm">GitHub</p>
                    <p className="text-xs text-theme-text-alt">@Savyasachi-2005</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 bg-theme-card-bg/80 backdrop-blur-sm rounded-lg border border-theme-accent/30 hover:border-theme-accent/50 transition-all duration-300 hover:bg-theme-card-hover hover:scale-[1.02]"
                >
                  <FaLinkedin className="w-5 h-5 text-theme-accent mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-theme-text text-sm">LinkedIn</p>
                    <p className="text-xs text-theme-text-alt">Abhishek Hiremath</p>
                  </div>
                </a>
                <a
                  href="mailto:abhishekhiremath0424@gmail.com"
                  className="flex items-center p-3 bg-theme-card-bg/80 backdrop-blur-sm rounded-lg border border-theme-accent/30 hover:border-theme-accent/50 transition-all duration-300 hover:bg-theme-card-hover hover:scale-[1.02]"
                >
                  <FaEnvelope className="w-5 h-5 text-theme-accent mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-theme-text text-sm">Email</p>
                    <p className="text-xs text-theme-text-alt">abhishekhiremath0424@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center justify-center lg:justify-start">
                <span className="w-4 h-1 bg-accent mr-2"></span>
                Location
              </h3>
              <div className="p-4 bg-background/20 backdrop-blur-sm rounded-lg border border-accent/30 hover:border-accent/50 transition-all duration-300 flex items-center justify-center lg:justify-start hover:bg-background/40 hover:scale-[1.02]">
                <div className="text-xl text-accent mr-3">📍</div>
                <p className="font-medium text-foreground text-sm">Tumkur, Karnataka, India</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Response', value: '<24h' },
                { label: 'Tea', value: '☕ Always' },
              ].map(item => (
                <div key={item.label} className="p-3 bg-background/30 border border-accent/30 rounded-md text-center hover:border-accent/50 transition-colors">
                  <p className="text-accent text-sm font-semibold">{item.value}</p>
                  <p className="text-[10px] tracking-wide text-foreground/60 uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ now visible on all sizes: full width below content on small, column on xl */}
          <motion.div
            className="space-y-6 col-span-1 xl:col-auto mt-4 xl:mt-0"
            initial={{ opacity: 0, y: 40, x: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FAQ />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Simple FAQ accordion component added locally
const FAQ = () => {
  const faqs = [
    {
      q: 'What kind of projects do you work on?',
      a: 'Mostly web apps & tooling with React + TypeScript on the front, and Python / APIs on the back. If it improves performance, developer experience, or looks a little futuristic — I\'m in.'
    },
    {
      q: 'Are you open to collaboration?',
      a: 'Absolutely. Side projects, open‑source issues, hackathons, experiments — pitch it. Worst case: we learn something. Best case: we ship something cool.'
    },
    {
      q: 'Preferred way to contact?',
      a: 'Send an email for anything serious. LinkedIn if you want to connect. GitHub if you found a bug. Smoke signals currently in beta.'
    },
    {
      q: 'How fast do you reply?',
      a: 'Usually within 24 hours. Faster if caffeinated. Slightly slower if debugging something that “should have worked”.'
    },
    {
      q: 'Will you build my entire app for free?',
      a: 'If it\'s open-source and interesting, maybe a part of it. If it\'s a full production platform — let\'s talk scope, timeline, and snacks.'
    }
  ];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-theme-card-bg/80 backdrop-blur-sm p-6 rounded-lg border border-theme-accent/30">
      <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center text-theme-text">
        <span className="w-4 h-1 bg-theme-accent mr-2" />
        FAQ
      </h3>
      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={item.q} className="border border-theme-accent/30 rounded-md overflow-hidden hover:border-theme-accent/50 transition-colors">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex justify-between items-center text-left px-3 py-2 bg-theme-bg/40"
              >
                <span className="text-sm font-medium text-theme-text pr-4">{item.q}</span>
                <span className={`text-theme-accent text-xs transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="px-3"
              >
                {isOpen && (
                  <p className="text-xs text-theme-text-alt pb-3 pt-1 leading-relaxed">{item.a}</p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
