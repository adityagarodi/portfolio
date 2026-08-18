import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    'Python Programming Certification',
    'Data Analytics Fundamentals',
    'Introduction to Artificial Intelligence',
    'Web Development Basics (HTML, CSS, JavaScript)',
    'IoT and Embedded Systems Workshop',
    'Git & GitHub Fundamentals',
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/[0.02]">
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
              Certifications
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-accent/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{cert}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
