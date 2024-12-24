import React, { useEffect, useState } from 'react';
import FdF from '../assets/FdF-Scale-Z.gif';
import cub3D from '../assets/cub3D_1.gif';
import inception from '../assets/schema.png';
import bacNote from '../assets/Bac-Note-Calculator.gif';

interface Repo {
    id: number; // Assuming 'id' is a unique identifier
    name: string;
    description: string | null;
    html_url: string;
    language: string[] | string | null;
}

const Projects : React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [showMore, setShowMore] = useState(false);
    const gifs : any = {
        'FdF': FdF,
        'cub3D': cub3D,
        'Inception': inception,
        'Bac-Note-Calculator': bacNote
    }
    useEffect(() => {
        fetch('https://api.github.com/users/yettabaa/repos')
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setRepos(data)
            });
    }
    , []);

    let withGif:Repo[] = [];
    let withoutGif:Repo[] = [];
    repos.forEach((repo: Repo) => {
        console.log('language', (repo.language))
        if (repo.name === 'Bac-Note-Calculator' || repo.name === 'FdF'
            || repo.name === 'cub3D' || repo.name === 'Inception') {
            withGif.push(repo);
        } else if (repo.name !== 'yettabaa') {
            withoutGif.push(repo);
        }
    });

    return (
        <div id='projects' className='flex flex-col gap-10 mt-20 p-8 max-w-6xl'>
            <span className='font-merriweather font-bold text-4xl text-_green pb-4'>
                Projects
            </span>
            <div className=' flex flex-col gap-12 sm:flex-row sm:justify-between sm:flex-wrap'>
            {
                withGif.map((repo : Repo) => {
                    return (
                        <div key={repo.id} className='sm:w-[46%] relative group flex flex-col gap-4 rounded-md overflow-hidden border-2 border-gray-500'>
                            <img src={gifs[repo.name]} alt="instagram" className=" h-72 w-auto" />
                            <div className="h-72 absolute p-2 inset-0 bg-slate-500 bg-opacity-70 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className='font-merriweather w-full text-center font-bold text-xl text-_green'>
                                    {repo.name}
                                </span>
                                <p className="font-merriweather font-bold text-sm mb-2 w-full text-center">
                                    {repo.description || "No description available"}
                                </p>
                                <div className='absolute bottom-2 flex flex-col gap-2 w-full'>
                                    <div className='flex  items-center gap-2 w-full'>
                                        <div className='bg-_green w-[10px] h-[10px] rounded-full'></div>
                                        <span className='font-merriweather font-bold text-md '>
                                            {repo.language}
                                        </span>
                                    </div>
                                    <a 
                                        href={repo.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="bg-_green w-1/2 text-bg text-center font-merriweather font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                        >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
            <span 
    			className='font-merriweather font-medium text-xl cursor-pointer' 
    			onClick={() => setShowMore(!showMore)}
			>
    			{showMore ? 'Show less' : 'Show more ...'}
			</span>
            <div className='flex flex-col gap-10 sm:flex-row sm:justify-between sm:flex-wrap'>
            {
                showMore && withoutGif.map((repo: Repo) => {
                    return (
                        <div key={repo.id} className='sm:w-[46%] relative group flex flex-col justify-center items-center gap-4 rounded-md h-64 overflow-hidden border-2 border-gray-500'>
                            <span className='font-merriweather font-bold text-3xl text-_green text-center'>
                                {repo.name}
                            </span>
                            <div className="h-64 absolute p-2 inset-0 bg-slate-500 bg-opacity-70 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className='font-merriweather w-full text-center font-bold text-xl text-_green line-clamp-1'>
                                    {repo.name}
                                </span>
                                <p className="font-merriweather font-bold text-sm mb-2  text-center line-clamp-6">
                                    {repo.description || "No description available"}
                                </p>
                                <div className='absolute bottom-2 flex flex-col gap-2 w-full'>
                                    <div className='flex  items-center gap-2 w-full'>
                                        <div className='bg-_green w-[10px] h-[10px] rounded-full'></div>
                                        <span className='font-merriweather font-bold text-md '>
                                            {repo.language}
                                        </span>
                                    </div>
                                    <a 
                                        href={repo.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="bg-_green w-1/2 text-bg text-center font-merriweather font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                        >
                                        View on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default Projects;