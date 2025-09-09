import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ABOUT US
        </motion.h2>
        
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-video"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="video-placeholder">
              <div className="play-button">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.2"/>
                  <path d="M40 30L25 38.6603L25 21.3397L40 30Z" fill="white"/>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3>What is Flagship?</h3>
            <p>
              Flagship'24 is the inaugural event of entrepreneurship Cell of VNIT that aims to foster innovation, entrepreneurship, and leadership among young minds. This event marks the conclave of pioneering personalities that have proven themselves in different walks of life .Elite speakers who have demonstrated their expertise on the international stage and can inspire the crowd with their interactions are invited every year . Last year Flagship'23 was graced by some of the esteemed 
              personalities like Ishan Sharma , Neha Agarwal and Sonal goel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;