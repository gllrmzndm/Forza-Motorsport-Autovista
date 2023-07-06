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
    <div className='player-wrapper pointer-events-none aspect-video object-cover relative h-screen w-full md:w-full md:h-full'>
      <div className='absolute md:absolute inset-0 flex items-center justify-center'>
          <p className='z-10 text-white font-roboto font-bold md:text-7xl tracking-widest'>E M O T I O N & V I S I O N</p>
      </div>
      <VideoPlayer playerRef={playerRef} />
    </div>
   )
  }

  function LandingPageSectionOne(){
    return (
      <div className='relative h-full md:grid grid-flow-col grid-rows-2 col-start-auto overflow-hidden md:h-screen'>

        <div className='md:h-screen'>
          <div className='flex justify-center'>
          <p className='z-10 absolute text-white font-roboto font-bold text-4xl'>EMOTION & VISION</p>
          </div>
          <Image className='z-0' src={GreenClover} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenFront} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenTail} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenWheel} />
          </div>

      </div>
    )

  }

  function LandingPageSectionOne2(){
    return (
      <div className='relative h-full md:grid grid-flow-col grid-rows-2 col-start-auto overflow-hidden md:h-screen'>

        <div className='md:h-screen'>
          <Image src={GreenClover} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenFront} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenTail} />
          </div>

        <div className='md:h-screen'>
          <Image src={GreenWheel} />
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
      <LandingPageSectionOne2 />
    </div>
  )
}