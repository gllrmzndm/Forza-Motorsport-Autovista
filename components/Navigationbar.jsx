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




    return (
        <div className="">

            <nav className="">

                {/* mobile navigation */}
                <ul className="space-y-2 my-2 mx-2 w-8 overflow-hidden md:hidden">
                    <span className="block h-0.5 w-8 bg-black" />
                    <span className="block h-0.5 w-8 bg-black" />
                    <span className="block h-0.5 w-8 bg-black" />
                </ul>

            </nav>

        </div>
    );
}

// normal screen navigation

function NormalMenu() {
    return (
        <div className="Relative">
             <ul className="hidden md:flex top-0 z-10 fixed bg-gradient-to-b from-stone-500d w-full h-10 items-center justify-around border-2 border-red-500">
                    <li className="text-red-500">Forza Motorsport</li>
                    <li className="text-red-500">Autovista</li>
                    <li className="text-red-500">Login</li>
                </ul>
        </div>
    )
}

export default function NavBar() {
    return (
        <div>
            <HamburgerMenu />
            <NormalMenu />
        </div>
    );
}