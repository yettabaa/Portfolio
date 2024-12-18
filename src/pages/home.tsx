import React from 'react';
import Menu from '../assets/Menu.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import union from '../assets/union.svg';

const Home = () => {
    return (
        // <div className='flex flex-row justify-center items-center bg-slate-400 m-4 border-solid border-2 border-red-600'></div>
        <>
            <div className='realtive h-screen w-screen'>
            <div className='fixed top-0 left-0 right-0 '>

                <div className=' flex flex-row justify-center items-center m-4 mt-8'>
                    <div className='mr-auto ml-4'>
                        <img src={Menu} alt="Menu" className="h-6 w-auto" />
                    </div>
                    <div className='flex justify-center items ml-auto gap-4'>
                        <img src={github} alt="github" className="h-6 w-auto" />
                        <img src={linkedin} alt="linkedin" className="h-6 w-auto" />
                        <img src={instagram} alt="instagram" className="h-6 w-auto" />
                    </div>
                </div>
            </div>
                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                    <img src={union} alt="union" className="h-4 w-auto animate-updown" />
                </div>
            </div>


            <div className="flex justify-center">
                <p className="text-white text-lg font-medium">Scroll down to explore more</p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-lg font-medium">Scroll down to explore more</p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-lg font-medium">Scroll down to explore more</p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-lg font-medium">Scroll down to explore more</p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-lg font-medium">Scroll down to explore more</p>
            </div>
        </>
    );
};

export default Home;