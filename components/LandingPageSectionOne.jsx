import React, { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Image from 'next/image';

const VideoPlayer = dynamic(() => import('../components/VideoPlayer'), {
  ssr: false,
});

function LandingpageSectionOne() {
  const playerRef = useRef();

  return (
    <div className='player-wrapper pointer-events-none relative grid h-screen w-full grid-cols-1 overflow-hidden md:h-screen md:w-full'>
      <div className='absolute inset-0 flex items-center justify-center md:absolute'>
        <p className='z-10 font-bold tracking-widest text-white md:text-7xl'>
          E M O T I O N & V I S I O N
        </p>
      </div>

      <div className='absolute inset-0 mt-40 flex items-center justify-center text-center md:absolute'>
        <p className='z-10 mx-10 text-base font-bold text-slate-600 md:text-base'>
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

export default function LandingpageOne() {
  return <LandingpageSectionOne />;
}
