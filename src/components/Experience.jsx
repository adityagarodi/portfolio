import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Users, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Data Analyst Intern',
      company: 'Bluestock',
      period: 'April 2026 – Present',
      description: 'Worked on data analysis projects using structured datasets; prepared reports and generated insights; applied analytical and problem-solving skills to drive data-informed decisions.',
      icon: Briefcase,
    },
    {
      title: 'Technical Lead',
      company: 'AI Club – Sanjivani College of Engineering',
      period: 'January 2025 – Present',
      description: 'Organized technical sessions, coding activities, and AI-related events; supported planning and execution of club initiatives; mentored students in AI and programming concepts.',
      icon: Users,
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
              Experience
            </span>
          </motion.h2>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent to-accent2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  <div className="hidden md:block flex-1" />
                  
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"
                  />

                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors ml-8 md:ml-0">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                        <exp.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <p className="text-accent font-medium mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>

                  <div className="hidden md:block flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
