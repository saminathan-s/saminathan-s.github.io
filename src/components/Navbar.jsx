import React from 'react';
import logo from '../assets/samLogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiLogoSass } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center text-4xl'>
        <BiLogoSass />
      </div>
      <div className='m-8 flex items-center justify-between gap-4 text-2xl'>
        <a
          href='https://sg.linkedin.com/in/saminathan-swaminathan'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/saminathan-s'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
