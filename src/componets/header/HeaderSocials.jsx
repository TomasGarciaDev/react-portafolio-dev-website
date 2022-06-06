import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubAlt} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/tomas-garcia-64b145102/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/TomasGarciaDev' target="_blank"><FaGithubAlt /></a>
    </div>
  )
}

export default HeaderSocials