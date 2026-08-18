import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      institution: 'Sanjivani College of Engineering',
      degree: 'B.Tech Computer Engineering',
      period: 'Aug 2024 – Present',
      cgpa: '8.8 CGPA',
      location: 'Kopargaon, Maharashtra',
    },
    {
      institution: 'Balaji High School',
      degree: 'Class XII',
      period: '2022 – 2023',
      cgpa: '81.30%',
      location: 'Chhatrapati Sambhajinagar, Maharashtra',
    },
    {
      institution: 'Rising Star English School',
      degree: 'Class X',
      period: '2020 – 2021',
      cgpa: '95.60%',
      location: 'Chhatrapati Sambhajinagar, Maharashtra',
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
              Education
            </span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.institution}</h3>
                    <p className="text-accent font-medium mb-3">{edu.degree}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium">
                        {edu.cgpa}
                      </div>
                    </div>
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

export default Education;
