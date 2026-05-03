import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone, Globe, Heart, BookOpen } from 'lucide-react';
import { profileData, languagesData, hobbiesData } from '../utils/data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <motion.div
            {...fadeInUp}
            className="glass-card-hover p-6 lg:col-span-2"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                <User size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                  {profileData.name}
                </h3>
                <p className="text-primary-500 dark:text-accent-400 font-semibold">
                  {profileData.heroTitle}
                </p>
              </div>
            </div>
            <p className="text-surface-700 dark:text-surface-200 leading-relaxed mb-6">
              {profileData.profile}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-surface-600 dark:text-surface-300">
                <MapPin size={18} className="text-primary-500 flex-shrink-0" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-surface-600 dark:text-surface-300">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <span>{profileData.email}</span>
              </div>
              <a
                href={profileData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-surface-600 dark:text-surface-300 hover:text-emerald-500 transition-colors"
              >
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span>{profileData.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="glass-card-hover p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <Globe size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-surface-900 dark:text-white">Languages</h3>
              </div>
              <div className="space-y-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.id}
                    className="flex items-center justify-between p-3 bg-surface-50 dark:bg-white/5 rounded-xl"
                  >
                    <span className="font-medium text-surface-700 dark:text-surface-200">
                      {lang.name}
                    </span>
                    <span className="badge-primary">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hobbies */}
        <motion.div {...fadeInUp} transition={{ delay: 0.3, duration: 0.6 }} className="mt-6">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Heart size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                Interests & Hobbies
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {hobbiesData.map((hobby) => (
                <span
                  key={hobby}
                  className="badge-accent hover:scale-105 transition-transform cursor-default"
                >
                  {hobby === 'Reading' && <BookOpen size={12} className="mr-1" />}
                  {hobby === 'Hiking' && '🏔️ '}
                  {hobby === 'Music' && '🎵 '}
                  {hobby === 'Volunteering' && '🤝 '}
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
