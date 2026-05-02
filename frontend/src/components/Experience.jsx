import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import { experienceData } from '../utils/data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey</p>
          <div className="section-divider" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-8 last:mb-0"
            >
              <div className="glass-card-hover p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="badge-primary">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-surface-600 dark:text-surface-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="ml-16">
                  <h4 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-surface-600 dark:text-surface-300">
                        <CheckCircle
                          size={16}
                          className="text-primary-500 mt-0.5 flex-shrink-0"
                        />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
