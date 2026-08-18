import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Languages, MessageSquare, Users, Lightbulb, Clock, Zap } from 'lucide-react';

const LanguagesSoftSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const languages = ['English', 'Marathi', 'Hindi', 'Japanese'];

  const softSkills = [
    { name: 'Communication', icon: MessageSquare },
    { name: 'Leadership', icon: Users },
    { name: 'Teamwork', icon: Users },
    { name: 'Problem Solving', icon: Lightbulb },
    { name: 'Time Management', icon: Clock },
    { name: 'Adaptability', icon: Zap },
  ];

  return (
    <section id="languages" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
              Languages & Soft Skills
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Languages className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
                    className="px-5 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-accent transition-colors cursor-default"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-accent/50 transition-all text-center"
                  >
                    <skill.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSoftSkills;
