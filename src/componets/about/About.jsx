import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import { BiBook } from 'react-icons/bi';

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <article className="about__card">
            <BiBook className='about__icon' />
            <h5>Portfolio</h5>
            <small>10+ completed</small>
          </article>
        </div>

        {/* <div className="about__content">
          <article className="about__card">
            <BiBook className='about__icon' />
            <h5>Portfolio</h5>
            <small>10+ completed</small>
          </article>
        </div> */}

        <p>I am an enthusiastic and proactive Full-Stack developer and Musician. I love teamwork synergies, and I work hard to get a good job done while building a fun and healthy working environment. I use my experience as a musician to feed my work as a Developer, skills I consistently apply in teamwork settings.
        I trained as a coder at Makers Academy, Europe's #1 Developer Bootcamp. I started as an eager amateur coder; this led me to win a Full Scholarship at Makers Academy. These intensive 16 weeks of Full-Stack training helped me grow into a competent and confident Developer.
        I highly enjoy and love the continuous growth aspect of a tech career. My main goal is to grow my knowledge as a Front-End and Full-Stack Developer while helping to make my clients and companies thrive.</p>

        <a href="#contact" className="btn btn-primary">Contact</a>
      </div>
    </section>
  )
}

export default About