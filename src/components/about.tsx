const About: React.FC = () => {
    return (
        <>
            <h2 className='font-bold text-4xl py-16 text-_green'>
                About Me
            </h2>
            <div id='about' className='flex flex-col gap-4 z-10' >
                <p className="text-justify text-lg font-medium">
                    Hello! I’m Ettabaa Yassin, a passionate Software Engineer with a strong technical foundation and a problem-solving mindset. My journey at 1337 Coding School (42 Network) has equipped me with deep expertise in C, C++, Linux, Git, Docker, and full-stack web development, fostering adaptability and self-learning through rigorous peer-to-peer collaboration.<br /><br />
                    Beyond technical skills, my background in Economics and Business Management gives me a strategic edge, allowing me to develop software solutions that align with real-world business challenges. <br /><br />
                    I thrive on tackling complex problems, building scalable applications, and continuously expanding my expertise in modern technologies. I’m eager to contribute to innovative projects and collaborate with dynamic teams to create impactful solutions. <br /><br />
                    Let’s connect and build something great together!
                </p>
            </div>
        </>
    )
}

export default About;