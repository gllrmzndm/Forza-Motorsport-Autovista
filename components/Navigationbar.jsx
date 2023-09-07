// The imports are needed for standard React projects not using NextJS
// import React from 'react'
// import ReactDOM from 'react-dom'

function HamburgerMenu() {
  // function handleClick() {
  //     const [isOpen, setIsOpen] = useState(0);
  //     // window.alert("Hello world!");

  //     if (isOpen) {
  //         return <>window.alert("Hello world!");</>

  //     } return <>window.alert("Hello world!");</>

  //     { isOpen ? <div>hello</div> : null }

  // }

  {
    /* mobile navigation */
  }
  return (
    <div className=' bg-white dark:bg-slate-800'>
      <nav className='border-grey-600 border-2 dark:border-slate-800'>
        <ul className='my-2 w-8 space-y-2 overflow-hidden md:hidden'>
          <span className='block h-0.5 w-8 bg-black dark:bg-white' />
          <span className='block h-0.5 w-8 bg-black dark:bg-white' />
          <span className='block h-0.5 w-8 bg-black dark:bg-white' />
        </ul>
      </nav>
    </div>
  );
}

// normal screen navigation

function NormalMenu() {
  return (
    <div className='Relative'>
      <ul className='from-stone-500d fixed top-0 z-10 hidden h-10 w-full items-center justify-around overflow-hidden bg-gradient-to-b md:flex'>
        <li className='text-white'>Forza Motorsport</li>
        <li className='text-white'>AUTOVISTA</li>
        <li className='text-white'>Login</li>
      </ul>
    </div>
  );
}

export default function NavBar() {
  return (
    <div>
      <HamburgerMenu />
      <NormalMenu />
    </div>
  );
}

// function NormalMenu() {
//     return (
//         <div className="Relative">
//              <ul className="hidden md:flex top-0 z-10 fixed bg-gradient-to-b from-stone-500d w-full h-10 items-center justify-around overflow-hidden">
//                     <li className="text-white">Forza Motorsport</li>
//                     <li className="text-white">AUTOVISTA</li>
//                     <li className="text-white">Login</li>
//                 </ul>
//         </div>
//     )
// }
