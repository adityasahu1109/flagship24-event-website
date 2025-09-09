import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Home.css';

// Import your logo
import eventLogo from '../assets/event-logo.png';

const Counter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <div className="presented-by">The E-Cell VNIT Presents</div>
            <h1>FLAGSHIP'24</h1>
            <div className="event-details">
              <p>October 21, 2024</p>
              <p>5:00 PM</p>
              <p>VNIT Auditorium</p>
            </div>
          </div>
          <div className="home-logo">
            <img src={eventLogo} alt="Flagship 2024 Logo" />
          </div>
        </div>
        
        <div className="metrics">
          <motion.div 
            className="metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="metric-value"><Counter end={10000} /></div>
            <div className="metric-label">Reach</div>
          </motion.div>
          <motion.div 
            className="metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="metric-value"><Counter end={5000} /></div>
            <div className="metric-label">Footfall</div>
          </motion.div>
          <motion.div 
            className="metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="metric-value"><Counter end={3} /></div>
            <div className="metric-label">Speakers</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;