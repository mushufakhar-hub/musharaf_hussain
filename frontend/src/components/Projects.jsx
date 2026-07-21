import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-24 bg-surface-100 dark:bg-surface-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-4">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">My recent work</p>
          <div className="section-divider" />
        </motion.div>

        {projects.length === 0 ? (
          <motion.div {...fadeInUp} className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Folder size={36} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-bold text-surface-700 dark:text-surface-300 mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-surface-500 dark:text-surface-400 max-w-md mx-auto">
              I'm currently working on some exciting projects. Check back soon to see them here!
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-200 w-full overflow-hidden bg-slate-350 p-6">
                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Folder size={48} className="text-white/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-surface-600 dark:text-surface-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.tech_stack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.split(',').map((tech) => (
                        <span
                          key={tech}
                          className="badge-primary text-xs"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.features && project.features.length > 0 && (
                    <ul className="mb-4 space-y-1.5 text-sm text-surface-600 dark:text-surface-300">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-surface-200 dark:border-white/10">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-surface-500 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
