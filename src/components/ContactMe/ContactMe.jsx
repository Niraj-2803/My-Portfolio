import React from 'react';
import "./ContactMe.css";
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className="content-container">
        <h5>Contact Me</h5>
        <div className="contact-content">
           <div style={{flex: 1}}>
            <ContactInfoCard 
                iconUrl="./assets/images/email.png"
                text="nirajtupsundar28@gmail.com"
            />
            <ContactInfoCard 
                iconUrl="./assets/images/linkdln.jpg"
                text="https://www.linkedin.com/in/niraj-pawan-tupsundar-20540022a"
            />

           </div>
           <div style={{flex: 1}}>
            <ContactForm/>
           </div>
        </div>
    </section>
  )
}

export default ContactMe
