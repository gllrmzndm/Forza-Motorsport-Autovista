import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Image from 'next/image';

import GreenClover from '../assets/IndexPageSectionOne/Giulia_Green_Clover.jpeg'
import GreenFront from '../assets/IndexPageSectionOne/Giulia_Green_Front.jpeg'
import GreenTail from '../assets/IndexPageSectionOne/Giulia_Green_Taillights.jpeg'
import GreenWheel from '../assets/IndexPageSectionOne/Giulia_Green_Wheel.jpeg'
import NavBar from '../components/Navigationbar';

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {ssr: false});



  function Home(){
   const playerRef=useRef();

   return (
    <div className='player-wrapper pointer-events-none h-screen w-full md:w-full md:h-screen border-10 border-green-400'>
        

      <div className='absolute md:absolute inset-0 flex items-center justify-center'>
        <p className='z-10 text-white font-roboto font-bold md:text-7xl tracking-widest'>E M O T I O N & V I S I O N</p>
      </div>

      <div className='absolute md:absolute inset-0 flex items-center justify-center text-center mt-40'>
        <p className='z-10 text-base text-slate-600 font-roboto font-bold md:text-base'>result of a collaboration between multiple complementary fields, Creative + technology.</p>
      </div>
    
        <VideoPlayer playerRef={playerRef} />

    </div>
   )
  }

  function LandingPageSectionOne(){
    return (
      <div className='relative h-full'>
        <div className='grid grid-cols-1 md:grid md:grid-cols-2 h-full overflow-hidden'>

          <div className='relative flex justify-center items-center overflow-hidden'>
              <p className='absolute z-10 text-white font-roboto font-bold'>UNMATCHED VISUAL FIDELITY</p>
              <Image className='z-0 transition ease-in-out duration-10000 hover:scale-150 hover:duration-20000' src={GreenTail} />
          </div>

          <div className='relative flex justify-center items-center overflow-hidden'>
              <p className='absolute z-10 text-white font-roboto font-bold'>SEE YOU AT THE STARTING LINE</p>
              <Image className='z-0 transition ease-in-out duration-10000 hover:scale-150 hover:duration-20000' src={GreenFront} />
          </div>

          <div className='relative flex justify-center items-center overflow-hidden'>
              <p className='absolute z-10 text-white font-roboto font-bold'>ALWAYS EVOLVING</p>
              <Image className='z-0 transition ease-in-out duration-10000 hover:scale-150 hover:duration-20000' src={GreenWheel} />
          </div>

          <div className='relative flex justify-center items-center overflow-hidden'>
              <p className='absolute z-10 text-white font-roboto font-bold'>WE CAN DO THIS ALL DAY</p>
              <Image className='z-0 transition ease-in-out duration-10000 hover:scale-150 hover:duration-20000' src={GreenClover} />
          </div>

        </div>

      </div>
    )

  }


export default function startEngine() {
  return (
    <div>
      <NavBar />
      <Home />
      <LandingPageSectionOne />
    </div>
  )
}