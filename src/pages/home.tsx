import React from 'react';
import union from '../assets/union.svg';
import picture from '../assets/yettabaa.jpg';
import Header from './header';
import Footer from './footer';
import Projects from './projects';
import About from './about';

const Home : React.FC = () => {
    return (
        <>
            <Header />
            <div className='h-screen flex flex-col  items-center pt-52 gap-10'>
                <div className='flex flex-col items-center '>
                    <div className='text-4xl font-bold font-merriweather'>Yassin Ettabaa</div>
                    <div className='text-4xl font-medium font-merriweather'
                         style={{color: 'var(--special-green)'}}>
                            Software Engineer
                    </div>
                </div>
                <div className='border-splide-500 border-2 border- rounded-full p-2'
                    style={{borderColor: 'var(--special-green)'}}>
                    <img src={picture} alt = 'Yettabaa' className='h-60 w-auto rounded-full' />
                </div>
                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                    <img src={union} alt='union' className='h-4 w-auto animate-updown' />
                </div>
            </div>

            <About />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;