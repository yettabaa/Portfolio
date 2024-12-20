import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import React, { useState } from 'react';

const footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // You can integrate an email service like EmailJS here
        console.log(formData);
    };
  return (

    <footer id='contact' className="py-8 border-[2px] border-_green rounded-sm p-8 ">
        <div className='flex flex-col sm:flex-row gap-8'>
            <div className='p-1 flex flex-col items-center gap-8 w-full sm:w-[50%]'>
                <p className="font-merriweather font-bold text-2xl text-_green mr-auto "
                    >Contact Me</p>
                <p className='font-merriweather font-normal text-lg'>
                    If you ever want to grab a coffee/bubble tea (virtually) or just want a quick 
                    chat - you can find me on social media or you can send me a message here!
                </p>
                <ul className="flex justify-center gap-[20vw] sm:gap-[6vw]">
                    <li>
                        <a href="https://github.com/yettabaa" target="_blank" rel="noopener noreferrer">
                            <img src={github} alt="github" className="h-8 w-auto" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yassin-ettabaa/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" className="h-8 w-auto" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/yassin_.te/" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" className="h-8 w-auto" />
                        </a>
                    </li>
                </ul>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center w-full gap-4 mt-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border-2 border-_green rounded-md bg-gray-800 text-wh w-full"
                    />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border-2 rounded-md border-_green  bg-gray-800 w-full"
                    />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 border-2 h-40 rounded-md border-_green bg-gray-800 w-full"
                    ></textarea>
                <button
                    type="submit"
                    className="w-40 bg-_green font-merriweather font-bold text-xl py-2 px-4 mr-auto rounded-md hover:bg-green-600"
                    >
                    Send
                </button>
            </form>
        </div>
        <p className="font-merriweather text-center text-sm pt-8">
            &copy; {new Date().getFullYear()} Ettabaa Yassin. All rights reserved.
        </p>
    </footer>
  );
};

export default footer;