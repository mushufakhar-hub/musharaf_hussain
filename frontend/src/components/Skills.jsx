import { motion } from 'framer-motion';
import { Code, Briefcase } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categoryIcons = {
  Technical: Code,
  Professional: Briefcase,
};

const categoryColors = {
  Technical: 'from-accent-400 to-accent-600',
  Professional: 'from-primary-500 to-primary-700',
};

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies & competencies</p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => {
            const Icon = categoryIcons[category] || Code;
            const categorySkills = skills.filter((s) => s.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              >
                <div className="glass-card-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                      {category} Skills
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-surface-700 dark:text-surface-200">
                            {skill.name}
                          </span>
                          <span className="text-xs font-semibold text-primary-500 dark:text-accent-400">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-surface-200 dark:bg-white/10 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                            className={`h-full rounded-full bg-gradient-to-r ${
                              categoryColors[category] || categoryColors.Technical
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
