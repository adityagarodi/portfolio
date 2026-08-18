import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'SmartKart — Online Marketplace System',
      tech: ['Python', 'OOP'],
      description: 'A Python-based marketplace system implementing user authentication, product management, and cart functionality using Object-Oriented Programming principles for efficient data handling.',
      githubLink: 'https://github.com/adityagarodi',
      demoLink: '#',
    },
    {
      title: 'CampCast — Digital Notice Board System',
      tech: ['Python', 'Web Development'],
      description: 'A digital notice display system built to improve communication and accessibility of campus announcements, developed through structured requirement analysis and collaborative implementation.',
      githubLink: 'https://github.com/adityagarodi',
      demoLink: '#',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-display font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-6xl"
                  >
                    🚀
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-accent/10 hover:border-accent/50 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent2 rounded-lg text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
