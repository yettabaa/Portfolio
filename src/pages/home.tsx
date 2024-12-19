import React from 'react';
import union from '../assets/union.svg';
import picture from '../assets/yettabaa.jpg';
import Header from './header';
import Footer from './footer';
import Projects from './projects';

const Home : React.FC = () => {
    return (
        <>
            <Header />
            <div className='h-screen flex flex-col  items-center pt-52 gap-10'>
                <div className='flex flex-col items-center '>
                    <div className='text-white text-4xl font-bold font-merriweather'>Yassin Ettabaa</div>
                    <div className='text-4xl font-medium font-merriweather'
                         style={{color: 'var(--special-green)'}}>
                            Software Engineer
                    </div>
                </div>
                <div className='border-splide-500 border-2 border- rounded-full p-2'
                    style={{borderColor: 'var(--special-green)'}}>
                    <img src={picture} alt = "Yettabaa" className="h-60 w-auto rounded-full" />
                </div>
                <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
                    <img src={union} alt="union" className="h-4 w-auto animate-updown" />
                </div>
            </div>


            <div className="flex flex-col gap-4 p-8">
                <span className="font-merriweather font-bold text-2xl"
                        style={{color: 'var(--special-green)'}}
                >
                    About Me
                </span>
                <span className="font-merriweather font-normal text-white text-lg">
                    Hello! Thanks for scrolling this far! 🤗 Just a heads up,
                    my portfolio is a little outdated at the moment.
                    I haven’t had time to update it, but I’m keeping it up for now,
                    and I hope it gives you some inspiration!
                    Other than coding, I spend most of my free time playing Animal
                    Crossing (add me!) or any other video games.
                    🤓 I've also been trying to read more so feel free to reach out
                    to me with any book recommendations!
                </span>
            </div>



            <Projects />
            <Footer />
        </>
    );
};

export default Home;