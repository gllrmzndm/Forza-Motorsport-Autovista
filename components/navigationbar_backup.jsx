import { useState } from 'react'

function NavigationBar() {

    
    function handleClick() {
        const [isOpen, setIsOpen] = useState(0);
        // window.alert("Hello world!");

        
        if (isOpen) {
            return <>window.alert("Hello world!");</>
            

        } return <>window.alert("Hello world!");</>

        { isOpen ? <div>hello</div> : null }

    }




    return (
        <div className="bg-black py-8">

            <nav className="" onClick={handleClick}>

                {/* mobile navigation */}
                <ul className="md:hidden space-y-2 mx-2 w-8 overflow-hidden">
                    <span className="block h-0.5 w-8 bg-orange-300"></span>
                    <span className="block h-0.5 w-8 bg-orange-300"></span>
                    <span className="block h-0.5 w-8 bg-orange-300"></span>
                </ul>

                {/* normal screen navigation */}
                <ul className="hidden md:flex justify-center space-x-10">
                    <li className="text-red-700 border border-orange-400">Autovista</li>
                    <li className="border border-green-400">Forza Motorsport</li>
                    <li className="border border-pink-400">Login</li>
                </ul>

            </nav>

        </div>
    );
}

export default function NavBar() {
    return (
        <div>
            <NavigationBar />
        </div>
    );
}