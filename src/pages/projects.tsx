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
                console.log(data)
                setRepos(data)
            });
    }
    , []);

    let withGif:Repo[] = [];
    let withoutGif:Repo[] = [];
    repos.forEach((repo: Repo) => {
        if (repo.name === 'Bac-Note-Calculator' || repo.name === 'FdF'
            || repo.name === 'cub3D' || repo.name === 'Inception') {
            withGif.push(repo);
        } else if (repo.name !== 'yettabaa') {
            withoutGif.push(repo);
        }
    });

    return (
        <div id='projects' className='flex flex-col gap-4 p-8'>
            <span className='font-merriweather font-bold text-2xl text-_green pb-4'>
                Projects
            </span>
            <div className='flex flex-col gap-10'>
                {
                    withGif.map((repo : Repo) => {
                        return (
                            <div key={repo.id} className='flex flex-col gap-4 rounded-md overflow-hidden border-2 border-gray-500'>
                                <img src={gifs[repo.name]} alt="instagram" className=" h-60 w-auto" />
                                {/* <span className='font-merriweather font-medium text-xl text-_green'>
                                    {repo.name}
                                    </span>
                                    <span className='font-merriweather font-normal text-white text-lg'>
                                    {repo.description}
                                    </span>
                                    <a href={repo.html_url} className='font-merriweather font-normal text-white text-lg'>
                                    {repo.html_url}
                                    </a> */}
                            </div>
                        );
                    })
                }
            </div>
            {

                !showMore && <span className='font-merriweather font-bold '
                onClick={() => setShowMore(!showMore)}
                >
                Show more ...
                </span>
            }
            {

                showMore && <span className='font-merriweather font-bold '
                onClick={() => setShowMore(!showMore)}
                >
                Show less
                </span>
            }
            <div className='flex flex-col gap-10'>
                {

                    showMore && withoutGif.map((repo: Repo) => {
                        return (
                            <div key={repo.id} className='flex flex-col gap-4 rounded-md overflow-hidden border-2 border-gray-500'>
                                <span className='font-merriweather font-medium text-xl text-_green'>
                                    {repo.name}
                                </span>
                                <span className='font-merriweather font-normal text-white text-lg'>
                                    {repo.description}
                                </span>
                                <a href={repo.html_url} className='font-merriweather font-normal text-white text-lg'>
                                    {repo.html_url}
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Projects;