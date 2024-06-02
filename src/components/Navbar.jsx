import { useState } from 'react';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-color1 h-24 flex justify-between  place-items-center">
            <p className="text-color5 font-bold text-2xl">Ath<span className="text-orange">x</span>l</p>
            <div className="block lg:hidden">
                <button
                    className="text-color5 hover:text-orange focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </>
                        ) : (
                            <>
                                <path className='' strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <ul className={`${menuOpen ? 'block' : 'hidden'} lg:flex text-color5 text-xl p-5 mt-[4rem] lg:p-0 lg:mt-0 lg:w-[25rem] w-[5rem]`}>
                <li className="hover:text-orange hover:underline duration-300 ease-in p-2">
                    <a href="#" className="block">Home</a>
                </li>
                <li className="hover:text-orange hover:underline duration-300 ease-in p-2">
                    <a href="#" className="block">Services</a>
                </li>
                <li className="hover:text-orange hover:underline duration-300 ease-in p-2">
                    <a href="#" className="block">Skills</a>
                </li>
                <li className="hover:text-orange hover:underline duration-300 ease-in p-2">
                    <a href="#" className="block">Education</a>
                </li>
                <li className="hover:text-orange hover:underline duration-300 ease-in p-2">
                    <a href="#" className="block">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
