import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Speakers.css';

// Import speaker images
import speaker1 from '../assets/speaker1.png';
import speaker2 from '../assets/speaker2.png';
import speaker3 from '../assets/speaker3.png';

const Speakers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const speakers = [
    {
      id: 1,
      name: "Daksh Sethi",
      role: "He is a TEDx and Josh Talks speaker, corporate trainer, and educational consultant, impacts 40,000 lives through 300 events across 120 institutions nationwide.",
      image: speaker1
    },
    {
      id: 2,
      name: "Ashutosh Pratap",
      role: "He is a Financial Consultant, Ditital Creator and the founder of Technical Sapiens which has 1M+ community on Instagram",
      image: speaker2
    },
    {
      id: 3,
      name: "Hiten Lulla",
      role: "He is a software engineer along with content creater and also he is a great story teller, he is the founder of the Hiten.Codes.",
      image: speaker3
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="speakers" className="speakers-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR SPEAKERS
        </motion.h2>
        
        <motion.div 
          className="speakers-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {speakers.map(speaker => (
            <motion.div 
              key={speaker.id}
              className="speaker-card"
              variants={itemVariants}
            >
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
                <div className="speaker-overlay"></div>
              </div>
              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;