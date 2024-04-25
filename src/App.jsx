import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';


const App = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  let content;
  if (currentPage === 'contact') {
    content = <ContactMe />;
  } else if(currentPage === 'work'){
    content = <WorkExperience/>;
  }
  else if(currentPage === 'skills'){
    content = <Skills/>;
  }

  return (
    <>
      <Navbar onPageChange={handleNavigation}/>
      {content}
      <div className="container">
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  )
}

export default App;