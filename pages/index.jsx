import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import NavBar from '../components/Navigationbar';

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {ssr: false});

function Header() {

  return (
    <header className="bg-blue-700">
        Amamazing Forza Motorsport Autovista
      </header>
  )
}

  function Home(){
   const playerRef=useRef();

   return (
    <div className='border-2 border-red-700 player-wrapper pointer-events-none aspect-video object-cover relative h-screen md:h-full'>
      <VideoPlayer playerRef={playerRef} />
    </div>
   )
  }


function Main() {

  return (
    <main className="bg-red-700">
        <p>Landing page text</p>

      </main>
  );
}


export default function startEngine() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Main /> */}
      {/* <Header /> */}
    </div>
  )
}