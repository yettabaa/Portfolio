import React from 'react';
import union from '../assets/union.svg';
import picture from '../assets/yettabaa.jpg';
import Header from './header';
import Footer from './footer';
import Projects from './projects';
import About from './about';
import Skills from './skills';

const Home : React.FC = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-12 items-center max-w-6xl m-auto p-6 sm:p-8'>

                <div className='h-screen flex flex-col items-center pt-[18vh] sm:pt-[25vh] gap-10 z-0'>
                    <div className='flex flex-col items-center '>
                        <h1 className='text-4xl font-bold'>Yassin Ettabaa</h1>
                        <h2 className='text-4xl font-medium text-_green'>
                                Software Engineer
                        </h2>
                    </div>
                    <div className='border-splide-500 border-2 border-_green rounded-full p-2 z-10'>
                        <img src={picture} alt = 'Yettabaa' className='h-60 w-auto rounded-full' />
                    </div>
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0'>
                        <img src={union} alt='union' className='h-4 w-auto animate-updown' />
                    </div>
                </div>

                <Projects />
                <About />
                <Skills />
            </div>
            <Footer />
        </>
    );
};

export default Home;