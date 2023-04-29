import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navigationbar'


const Header = () => {

  return (
    <>
      <header className="bg-blue-700">
        Amamazing Forza Motorsport Autovista
      </header>
    </>
  )
}

const IntroVideo = () => {

  return (
    <div className="z-0 border-2 border-emerald-300 overflow-hidden static w-full">
      <div className="player-wrapper pointer-events-none aspect-video object-cover relative border-2 border-orange-500 h-screen md:h-full w-screen">
        <iframe width="100%" height="100%" loop="loop" autoPlay="autoplay" src="https://www.youtube.com/embed/oB5vg1CniJc?autoplay=1&mute=1&playlist=oB5vg1CniJc&loop=1&autoplay=1&mute=1" title="YouTube video player" frameorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; autoplay; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}

const Main = () => {

  return (
    <>
      <main className="bg-red-700">
        <p>Landing page text</p>

      </main>
    </>
  )
}


export default function startEngine() {
  return (
    <div>
      <NavBar />
      <IntroVideo />
      {/* <Main /> */}
    </div>
  )
}