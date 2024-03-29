import React, { useState } from 'react';
import Footerbar from '@/components/Footerbar';
import Link from 'next/link';

function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menu is er eerst niet en dan wel omdat hij op 'false' staat
  // Menu is er op md niet aanwezig.
  // mobile menu
  return (
    <div className='fixed z-50 w-full bg-gray-300 opacity-70 dark:bg-gray-950'>
      <nav className='z-1 relative flex w-screen items-center justify-between bg-white p-4 dark:bg-gray-950 md:hidden'>
        <div className={`menu ${menuOpen ? 'block h-6' : 'hidden'}`}>
          <ul className='absolute left-0 right-0 top-14 z-20 -mt-4 flex h-screen w-screen flex-col items-center justify-center gap-10 overscroll-contain  bg-white text-center text-lg font-bold text-black opacity-100 dark:bg-gray-950 dark:text-white'>
            <li className='w-screen'>Forza Motorsports</li>
            <li className='w-screen'>
              <Link href='/CarList.jsx'>Autovista</Link>
            </li>
            <li className='w-screen'>Login</li>
          </ul>
        </div>
        <div
          className={`hamburger my-4 cursor-pointer ${
            menuOpen ? 'absolute' : ''
          }`}
          onClick={toggleMenu}
        >
          <div className='my-1 h-0.5 w-6 bg-black dark:bg-white'></div>
          <div className='my-1 h-0.5 w-6 bg-black dark:bg-white'></div>
          <div className='my-1 h-0.5 w-6 bg-black dark:bg-white'></div>
        </div>
        {/* <div className='text-2xl font-bold text-white'>Logo</div> */}
      </nav>

      {/* Desktop menu */}
      <div className='relative hidden h-20 items-center justify-center font-bold md:flex'>
        <nav className='relative hidden md:block'>
          <ul className='grid grid-cols-3 justify-center gap-60 text-center text-lg text-black dark:bg-gray-950 dark:text-white'>
            <li className='hover:text-green-600'>
              <Link href='/Carlist'>Forza Motorsport</Link>
            </li>
            <li className='hover:text-white'>
              <Link href='/pages/posts/CarList.jsx'>AUTOVISTA</Link>
            </li>
            <li className='hover:text-red-700'>
              <Link href='/Carlist'>Login</Link>
            </li>
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
