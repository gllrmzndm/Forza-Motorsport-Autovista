import dynamic from 'next/dynamic';
import { useRef } from 'react';
import NavBar from '../components/Navigationbar';

const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), {ssr: false});



  function Home(){
   const playerRef=useRef();

   return (
    <div className='border-2 border-red-700 player-wrapper pointer-events-none aspect-video object-cover relative h-full md:h-fullP'>
      <VideoPlayer playerRef={playerRef} />
    </div>
   )
  }


export default function startEngine() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  )
}