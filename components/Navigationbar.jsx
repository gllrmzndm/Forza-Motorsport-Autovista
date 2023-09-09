import React, { useState } from 'react';
import Footerbar from '@/components/Footerbar';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menu is er eerst niet en dan wel omdat hij op 'false' staat
  // Menu is er op md niet aanwezig.

  return (
    <div className='bg-white dark:bg-gray-950'>
      <nav className='flex items-center justify-between bg-gray-900 p-4 md:hidden'>
        <div className={`menu ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='space-y-4 text-lg text-white'>
            <li className='text-white'>Forza Motorsport</li>
            <li className='text-white'>AUTOVISTA</li>
            <li className='text-white'>Login</li>
          </ul>
        </div>
        <div
          className={`hamburger cursor-pointer p-2 ${
            menuOpen ? 'bg-gray-700' : 'bg-red-900'
          }`}
          onClick={toggleMenu}
        >
          <div className='my-1 h-0.5 w-6 bg-white'></div>
          <div className='my-1 h-0.5 w-6 bg-white'></div>
          <div className='my-1 h-0.5 w-6 bg-white'></div>
        </div>
        <div className='text-2xl font-bold text-white'>Logo</div>
      </nav>

      <div className='relative hidden h-20 items-center justify-center font-bold md:flex'>
        <nav className='relative hidden md:block'>
          <ul className='grid grid-cols-3 justify-center gap-60 text-center text-lg text-black dark:bg-gray-950 dark:text-white'>
            <li className=''>Forza Motorsport</li>
            <li className=''>AUTOVISTA</li>
            <li className=''>Login</li>
          </ul>
        </nav>
      </div>

      {/* <div className='grid w-screen grid-cols-3 justify-self-end text-center'>
        <p className='border-1 border-l-2 border-r-2 border-gray-600 border-opacity-50 bg-green-500 text-green-500 text-opacity-0'>
          ITA
        </p>
        <p className='bg-white text-white text-opacity-0'>ITA</p>
        <p className='border-1 border-l-2 border-r-2 border-gray-600 border-opacity-50 bg-red-500 text-red-500 text-opacity-0'>
          ITA
        </p>
      </div> */}
    </div>
  );
}

export default function NavBar() {
  return (
    <div>
      <HamburgerMenu />
    </div>
  );
}
