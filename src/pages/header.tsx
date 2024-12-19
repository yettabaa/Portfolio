import Menu from '../assets/Menu.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';

import React, { useState } from 'react';

const Header : React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='fixed top-4 left-4'>
            <div
            className='flex flex-col justify-center items-center w-8 h-8 cursor-pointer gap-2'
            onClick={toggleMenu}
            >
                <div
                    className={`h-1 w-full rounded-full bg-white transition-transform duration-300 ${
                        menuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></div>
                <div
                    style={{backgroundColor: 'var(--special-green)'}}
                    className={`h-1 w-full rounded-full transition-opacity duration-300 ${
                        menuOpen ? 'opacity-0' : ''
                    }`}
                ></div>
                <div
                    className={`h-1 w-full rounded-full bg-white transition-transform duration-300 ${
                        menuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></div>
            </div>
            {menuOpen && (
                <div className='fixed h-full w-full bg-special_green'
                >
                    <ul className="flex flex-col gap-4">
                        <li>
                            <a href="#projects" className="hover:underline">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}  
export default Header;