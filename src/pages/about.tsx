const About: React.FC = () => {
    return (
        <div id='about' className='flex flex-col gap-4 p-8 max-w-6xl z-10' >
            <span className='font-merriweather font-bold text-4xl text-_green'>
                About Me
            </span>
            <p className="text-lg font-medium font-merriweather mb-6">
                Hello! I’m Ettabaa Yassin, a passionate Software Engineer with a foundation built at 1337 (42 School), a transformative institution that emphasizes peer learning and autonomous problem-solving. At 1337, I honed my skills through collaborative projects, tackling complex challenges, and mastering a wide array of programming languages and tools.
            </p>
            <p className="text-lg font-medium font-merriweather mb-6">
                I’ve gained expertise in low-level programming (C/C++), providing me with a solid understanding of memory management, algorithms, and systems programming. This strong technical foundation allows me to adapt quickly to new frameworks, languages, and emerging technologies.
            </p>
            <p className="text-lg font-medium font-merriweather mb-6">
                What sets me apart is my background in Economics and Business Management, which gives me a unique approach to problem-solving—balancing technical solutions with strategic business insights. I’m driven by the opportunity to work on projects that solve real-world problems and make a meaningful impact.
            </p>
            <p className="text-lg font-medium font-merriweather mb-6">
                I’m always eager to learn, grow, and contribute to innovative projects across various domains in computer science. Let’s build something amazing together!
            </p>
        </div>
    )
}

export default About;