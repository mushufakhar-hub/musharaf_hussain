import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';
import { coursesData, certificatesData } from '../utils/data';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">Courses & Certificates</h2>
          <p className="section-subtitle">Continuous learning journey</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Courses */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">Courses</h3>
            </div>
            <div className="space-y-4">
              {coursesData.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-hover p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-surface-900 dark:text-white mb-1">
                        {course.title}
                      </h4>
                      <p className="text-sm text-surface-500 dark:text-surface-400">
                        {course.description}
                      </p>
                    </div>
                    <span className="badge-primary text-xs">
                      {course.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Award size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">Certificates</h3>
            </div>
            <div className="space-y-4">
              {certificatesData.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card-hover p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-surface-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-surface-500 dark:text-surface-400">
                        {cert.description}
                      </p>
                    </div>
                    <span className="badge-accent text-xs">
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
