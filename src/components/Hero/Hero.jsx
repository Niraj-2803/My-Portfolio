import React from 'react';
import './Hero.css';
import img1 from "./assets/img_01.png";
import img2 from "./assets/pic.jpg"
import img3 from "./assets/img_02.png";
import img4 from "./assets/img_03.png";
import img5 from "./assets/img_04.png";

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
                Student TE, AI & Data Science at K.K.Wagh Institute of Engineering | C++ Programmer | Data Science Enthusiast
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={img1} alt="React" />
                </div>
                <img src={img2} alt="Photo" />
            </div>
            <div>
                <div className="tech-icon1">
                    <img src={img3} alt="Html" />
                </div>
                <div className="tech-icon2">
                    <img src={img4} alt="Css" />
                </div>
                <div className="tech-icon3">
                    <img src={img5} alt="Js" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;
