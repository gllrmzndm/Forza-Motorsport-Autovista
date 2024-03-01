import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GreenClover from '../assets/IndexPageSectionOne/Giulia_Green_Clover.jpeg';
import GreenFront from '../assets/IndexPageSectionOne/Giulia_Green_Front.jpeg';
import GreenTail from '../assets/IndexPageSectionOne/Giulia_Green_Taillights.jpeg';
import GreenWheel from '../assets/IndexPageSectionOne/Giulia_Green_Wheel.jpeg';

function LandingpageSectionTwo() {
  return (
    <div className='relative h-full'>
      <div className='grid h-full grid-cols-1 overflow-hidden md:grid md:grid-cols-2'>
        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='absolute z-10 font-bold text-white'>
            UNMATCHED VISUAL FIDELITY
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenTail}
          />
        </div>

        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='absolute z-10 font-bold text-white'>
            SEE YOU AT THE STARTING LINE
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenFront}
          />
        </div>

        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='absolute z-10 font-bold text-white'>ALWAYS EVOLVING</p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenWheel}
          />
        </div>

        <div className='relative flex items-center justify-center overflow-hidden '>
          <p className='absolute z-10 font-bold text-white'>
            WE CAN DO THIS ALL DAY
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenClover}
          />
        </div>
      </div>
    </div>
  );
}

export default function LandingpageOne() {
  return <LandingpageSectionTwo />;
}
