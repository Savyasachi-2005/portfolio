import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Simulate form submission with timeout
    // In a real app, you would use Formspree or another service
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-cyber-dark pt-20 py-16 relative overflow-hidden">
      {/* Background effect - Full viewport coverage */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(circle at center, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        {/* Glowing orbs */}
        <motion.div 
          className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-cyber-blue opacity-5 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div 
          className="absolute right-0 bottom-40 w-64 h-64 rounded-full bg-cyber-purple opacity-5 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
      </div>
      
  <div className="container mx-auto max-w-6xl px-6 relative z-10 flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-2xl md:text-4xl font-bold mb-4 font-orbitron glow-text text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In <span className="text-cyber-blue">Touch</span>
          </motion.h1>
          <motion.div
            className="w-20 h-1 bg-cyber-blue mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p
            className="mt-4 mx-auto text-gray-300 text-base max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Feel free to reach out to me for collaborations, opportunities, or just to say hi!
          </motion.p>
        </div>

  {/* Main Content Grid */}
  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 w-full">
          {/* Contact Form - Left Side */}
          <motion.div
            className="bg-cyber-dark/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4 text-cyber-blue">✓</div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300 mb-4">Your message has been sent successfully.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-cyber-blue text-white rounded-md hover:bg-cyber-blue/80 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-cyber-dark/20 border border-gray-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors text-white text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-cyber-dark/20 border border-gray-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors text-white text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-cyber-dark/20 border border-gray-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors text-white text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-cyber-dark/20 border border-gray-600/50 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent transition-colors resize-none text-white text-sm"
                  />
                </div>
                
                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md bg-cyber-blue text-white font-medium transition-all duration-300 glow-border ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-cyber-blue/80 hover:scale-[1.02]'
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
              <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center justify-center lg:justify-start">
                <span className="w-4 h-1 bg-cyber-blue mr-2"></span>
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Savyasachi-2005"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 bg-cyber-dark/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-cyber-blue/50 transition-all duration-300 hover:bg-cyber-dark/40 hover:scale-[1.02]"
                >
                  <FaGithub className="w-5 h-5 text-cyber-blue mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-white text-sm">GitHub</p>
                    <p className="text-xs text-gray-400">@Savyasachi-2005</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-hiremath-3020692a3"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center p-3 bg-cyber-dark/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-cyber-blue/50 transition-all duration-300 hover:bg-cyber-dark/40 hover:scale-[1.02]"
                >
                  <FaLinkedin className="w-5 h-5 text-cyber-blue mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-white text-sm">LinkedIn</p>
                    <p className="text-xs text-gray-400">Abhisek Hiremath</p>
                  </div>
                </a>
                <a
                  href="mailto:abhishekhiremath0424@gmail.com"
                  className="flex items-center p-3 bg-cyber-dark/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-cyber-blue/50 transition-all duration-300 hover:bg-cyber-dark/40 hover:scale-[1.02]"
                >
                  <FaEnvelope className="w-5 h-5 text-cyber-blue mr-3" />
                  <div className="text-left">
                    <p className="font-medium text-white text-sm">Email</p>
                    <p className="text-xs text-gray-400">abhishekhiremath0424@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center justify-center lg:justify-start">
                <span className="w-4 h-1 bg-cyber-blue mr-2"></span>
                Location
              </h3>
              <div className="p-4 bg-cyber-dark/20 backdrop-blur-sm rounded-lg border border-gray-600/30 hover:border-cyber-blue/50 transition-all duration-300 flex items-center justify-center lg:justify-start hover:bg-cyber-dark/40 hover:scale-[1.02]">
                <div className="text-xl text-cyber-blue mr-3">📍</div>
                <p className="font-medium text-white text-sm">Tumkur, Karnataka, India</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Response', value: '<24h' },
                { label: 'Tea', value: '☕ Always' },
              ].map(item => (
                <div key={item.label} className="p-3 bg-cyber-dark/30 border border-gray-600/30 rounded-md text-center hover:border-cyber-blue/50 transition-colors">
                  <p className="text-cyber-blue text-sm font-semibold">{item.value}</p>
                  <p className="text-[10px] tracking-wide text-gray-400 uppercase">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extra Content / FAQ - Right Column (only on xl) */}
          <motion.div
            className="space-y-6 hidden xl:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
    <div className="bg-cyber-dark/30 backdrop-blur-sm p-6 rounded-lg border border-gray-700/30">
      <h3 className="text-lg font-bold mb-4 font-orbitron flex items-center">
        <span className="w-4 h-1 bg-cyber-blue mr-2" />
        FAQ
      </h3>
      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <div key={item.q} className="border border-gray-600/30 rounded-md overflow-hidden hover:border-cyber-blue/50 transition-colors">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className="w-full flex justify-between items-center text-left px-3 py-2 bg-cyber-dark/40"
              >
                <span className="text-sm font-medium text-gray-200 pr-4">{item.q}</span>
                <span className={`text-cyber-blue text-xs transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="px-3"
              >
                {isOpen && (
                  <p className="text-xs text-gray-400 pb-3 pt-1 leading-relaxed">{item.a}</p>
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
