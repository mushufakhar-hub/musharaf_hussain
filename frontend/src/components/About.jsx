import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Globe, Heart, BookOpen } from 'lucide-react';
import { profileData, languagesData, hobbiesData } from '../utils/data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrame;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1200, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };

    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { value: 6, suffix: '+', label: 'Projects Built' },
    { value: 3, suffix: '+', label: 'Core Tech Stacks' },
    { value: 100, suffix: '%', label: 'Focused Execution' },
  ];

  return (
    <section id="about" className="bg-surface-100 py-24 dark:bg-surface-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="mb-4 text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
          <div className="section-divider" />
        </motion.div>

        <div className="mb-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...fadeInUp} className="glass-card-hover p-6">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg shadow-primary-500/20">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-white">{profileData.name}</h3>
                <p className="font-semibold text-primary-500 dark:text-accent-400">{profileData.heroTitle}</p>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-surface-700 dark:text-surface-200">{profileData.profile}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-surface-600 dark:text-surface-300">
                <MapPin size={18} className="flex-shrink-0 text-primary-500" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-surface-600 dark:text-surface-300">
                <Mail size={18} className="flex-shrink-0 text-primary-500" />
                <span>{profileData.email}</span>
              </div>
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-surface-600 transition-colors hover:text-emerald-500 dark:text-surface-300"
              >
                <Phone size={18} className="flex-shrink-0 text-emerald-500" />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.15, duration: 0.6 }} className="space-y-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card-hover p-5">
                <div className="text-3xl font-bold text-primary-600 dark:text-cyan-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1 text-sm font-medium text-surface-600 dark:text-surface-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div {...fadeInUp} transition={{ delay: 0.25, duration: 0.6 }}>
          <div className="glass-card p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">Interests & Hobbies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {hobbiesData.map((hobby) => (
                <span key={hobby} className="badge-accent hover:scale-105 transition-transform cursor-default">
                  {hobby === 'Travel' && '✈️ '}
                  {hobby === 'Photography' && '📷 '}
                  {hobby === 'Hiking' && '🏔️ '}
                  {hobby === 'AI Innovation' && '🤖 '}
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
