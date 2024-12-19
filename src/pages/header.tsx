import React, { useState } from 'react';

const Header : React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className='fixed top-6 right-7 z-50 cursor-pointer group'
                onClick={toggleMenu}
                >
                <div className={`flex flex-col justify-center items-center w-6 h-8 gap-[0.3rem] transition-transform group-hover:rotate-[90deg]
                    ${menuOpen ? 'rotate-[90deg]' : 'group-hover:translate-x-[20%]'}  `}>
                    <div
                        className={`h-1 w-full rounded-3xl bg-white transition-transform
                            ${menuOpen ? 'rotate-[45deg] translate-y-[225%]' : ' duration-300 group-hover:rotate-[30deg] group-hover:translate-y-[90%]'}`}
                    ></div>
                    <div
                        className={`h-1 w-full rounded-3xl bg-special_green transition-opacity group-hover:opacity-0
                            ${menuOpen ? 'opacity-0' : '' } `}
                    ></div>
                    <div
                        className={`h-1 w-full rounded-3xl bg-white transition-transform 
                            ${menuOpen ? 'rotate-[-45deg] translate-y-[-225%]' : 'duration-300 group-hover:-rotate-[30deg] group-hover:translate-y-[-90%]'}`}
                    ></div>
                </div>
            </div>


            {menuOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-special_green transition-all duration-300 z-40'
                >
                    <ul className='flex flex-col gap-12 items-center'>
                        <li>
                            <a className='hover:text-bg_color font-merriweather font-bold text-4xl'
                                href='#projects' onClick={toggleMenu}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className='hover:text-bg_color font-merriweather font-bold text-4xl'
                                href='#about' onClick={toggleMenu}
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a className='hover:text-bg_color font-merriweather font-bold text-4xl'
                                href='#contact' onClick={toggleMenu}
                                >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}  
export default Header;