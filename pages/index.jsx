import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navigationbar'


const Header = () => {

  return (
    <>
      <header className="bg-blue-700 z-40">
        Amamazing Forza Motorsport Autovista
      </header>
    </>
  )
}

const IntroVideo = () => {

  return (
    <div className="absolute z-0 player-wrapper pointer-events-none w-full aspect-video object-cover">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9aAr5blVy0g?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoPlay="true" allowfullscreen></iframe>
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


export default function whatever () {
  return (
    <div>
      <NavBar />
      <Header />
      <IntroVideo />
      <Main />
    </div>
  )
}