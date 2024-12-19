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
    // <div id='contact' className=''
    //     style={{background: 'var(--special-green)'}}
    // >
    //     <div className='flex flex-row justify-center items-center '>
    //         <div className='flex justify-center  gap-4'>
    //             <img src={github} alt='github' className='h-6 w-auto' />
    //             <img src={linkedin} alt='linkedin' className='h-6 w-auto' />
    //             <img src={instagram} alt='instagram' className='h-6 w-auto' />
    //         </div>
    //     </div>
    // </div>
    <footer className="bg-fo py-8 text-center">
            <p className="text-lg font-semibold">Contact Me</p>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mt-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-2 border border-gray-700 bg-gray-800 text-white"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="p-2 border border-gray-700 bg-gray-800 text-white"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 border border-gray-700 bg-gray-800 text-white"
                ></textarea>
                <button
                    type="submit"
                    className="bg-special_green text-white py-2 px-4 hover:bg-green-600"
                >
                    Send
                </button>
            </form>
        </footer>
    
  );
};

export default footer;