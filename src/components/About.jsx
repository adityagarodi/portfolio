import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { GraduationCap, Code, Award, Briefcase } from 'lucide-react';

const StatCounter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: 8.8, suffix: ' CGPA', label: 'Current CGPA', icon: GraduationCap },
    { value: 2, suffix: '+', label: 'Projects', icon: Code },
    { value: 6, suffix: '', label: 'Certifications', icon: Award },
    { value: 1, suffix: '', label: 'Internship', icon: Briefcase },
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
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
            className="text-4xl sm:text-5xl font-display font-bold mb-4 text-center"
          >
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              I am a B.Tech Computer Engineering student at{' '}
              <span className="text-accent font-medium">Sanjivani College of Engineering</span> with a CGPA of 8.8.
              Passionate about AI, data analysis, and software development, I love building efficient solutions
              to real-world problems. I'm constantly learning and exploring new technologies to expand my skill set
              and create impactful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-accent/50 transition-colors group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:text-accent2 transition-colors" />
                <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
                  <StatCounter end={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
