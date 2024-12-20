const About: React.FC = () => {
    return (
        <div id='about' className='flex flex-col gap-4 p-8' >
            <span className='font-merriweather font-bold text-2xl text-_green'>
                About Me
            </span>
            <span className='font-merriweather font-normal text-lg'>
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
    )
}

export default About;