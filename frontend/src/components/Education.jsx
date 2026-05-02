import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../utils/data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500/30" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-1 w-5 h-5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full border-4 border-white dark:border-surface-950 shadow-lg shadow-primary-500/30" />

                {/* Card */}
                <div className="glass-card-hover p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="badge-primary">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-surface-600 dark:text-surface-300 font-medium mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-surface-500 dark:text-surface-400 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
