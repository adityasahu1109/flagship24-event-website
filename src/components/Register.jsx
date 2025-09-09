import { useState } from 'react';
import { motion } from 'framer-motion';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    collegeEmail: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Registration successful!');
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="register" className="register-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          REGISTER NOW
        </motion.h2>
        
        <motion.form 
          className="registration-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <motion.div 
            className="form-group"
            whileFocus="focus"
            variants={inputVariants}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            whileFocus="focus"
            variants={inputVariants}
          >
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            whileFocus="focus"
            variants={inputVariants}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            whileFocus="focus"
            variants={inputVariants}
          >
            <input
              type="email"
              name="collegeEmail"
              value={formData.collegeEmail}
              onChange={handleChange}
              placeholder="College Email Address"
              required
            />
          </motion.div>
          
          <motion.button 
            type="submit"
            className="register-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Register;