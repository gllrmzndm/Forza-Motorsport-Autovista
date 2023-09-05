import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Image from 'next/image';

import GreenClover from '../assets/IndexPageSectionOne/Giulia_Green_Clover.jpeg';
import GreenFront from '../assets/IndexPageSectionOne/Giulia_Green_Front.jpeg';
import GreenTail from '../assets/IndexPageSectionOne/Giulia_Green_Taillights.jpeg';
import GreenWheel from '../assets/IndexPageSectionOne/Giulia_Green_Wheel.jpeg';
import NavBar from '../components/Navigationbar';

const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
});

function Home() {
  const playerRef = useRef();

  return (
    <div className='player-wrapper pointer-events-none relative grid h-screen w-full grid-cols-1 overflow-hidden md:h-screen md:w-full'>
      <div className='absolute inset-0 flex items-center justify-center md:absolute'>
        <p className='font-roboto z-10 font-bold tracking-widest text-white md:text-7xl'>
          E M O T I O N & V I S I O N
        </p>
      </div>

      <div className='absolute inset-0 mt-40 flex items-center justify-center text-center md:absolute'>
        <p className='font-roboto z-10 text-base font-bold text-slate-600 md:text-base'>
          result of a collaboration between multiple complementary fields,
          Creative + technology.
        </p>
      </div>

      <div className='md:screen grid aspect-[21/9] h-full grid-cols-1 overflow-hidden md:max-h-full'>
        <VideoPlayer playerRef={playerRef} />
      </div>
    </div>
  );
}

function LandingPageSectionOne() {
  return (
    <div className='relative h-full'>
      <div className='grid h-full grid-cols-1 overflow-hidden md:grid md:grid-cols-2'>
        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='font-roboto absolute z-10 font-bold text-white'>
            UNMATCHED VISUAL FIDELITY
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenTail}
          />
        </div>

        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='font-roboto absolute z-10 font-bold text-white'>
            SEE YOU AT THE STARTING LINE
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenFront}
          />
        </div>

        <div className='relative flex items-center justify-center overflow-hidden'>
          <p className='font-roboto absolute z-10 font-bold text-white'>
            ALWAYS EVOLVING
          </p>
          <Image
            className='z-0 transition duration-10000 ease-in-out hover:scale-150 hover:duration-20000'
            src={GreenWheel}
          />
        </div>

        <div className='flex items-center justify-center overflow-hidden relative '>
          <p className='font-roboto absolute z-10 font-bold text-white'>
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

export default function startEngine() {
  return (
    <div>
      <NavBar />
      <Home />
      <LandingPageSectionOne />
    </div>
  );
}
