import React from 'react';
import './header.css';
import CTA from './CTA'
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello, I am</h5>
        <h1>Tomás García</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME}></img>
        </div>
        <a href='#content' className='scroll_down'>Scroll Dowm</a>
      </div>
    </header>
  )
}

export default Header