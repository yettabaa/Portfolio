import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import React, { useState } from 'react';

const footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setEmailError(!emailRegex.test(value));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (emailError) {
          alert("Please enter a valid email address.");
          return;
        }
    
        try {
            const response = await fetch("https://formsubmit.co/9fd25ace48441795df46ec0ecb5c9936", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // Clear form
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };
    return (

    <footer id='contact' className="py-8 border-[2px] border-_green rounded-sm w-full mt-32 p-8 items-center flex flex-col">
        <div className='flex flex-col sm:flex-row gap-16 max-w-6xl'>
            <div className='p-1 flex flex-col items-center gap-8 w-full sm:w-[50%]'>
                <p className="font-merriweather font-bold text-4xl text-_green mr-auto "
                    >Contact Me</p>
                <p className="text-lg font-medium font-merriweather">
                    I’m always open to connecting, whether it’s to collaborate on exciting projects, share knowledge, or discuss industry trends. If you’re interested in working together or just want to say hello, feel free to reach out through any of the following channels.
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
            <form className="flex flex-col items-center w-full gap-4 sm:mt-20"
                    onSubmit={handleSubmit}  
            >
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
                    className={`p-2 border-2 rounded-md bg-gray-800 w-full ${
                        emailError ? "border-red-500" : "border-_green"} `}
                    required
                    />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="p-2 border-2 h-40 rounded-md border-_green bg-gray-800 w-full"
                    required
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