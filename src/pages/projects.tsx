import React, { useEffect, useState } from 'react';

interface Repo {
    id: number; // Assuming 'id' is a unique identifier
    name: string;
    description: string | null;
    html_url: string;
}

const Projects : React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/yettabaa/repos')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setRepos(data)
            });
    }
    , []);

    return (
        <div id='projects' className='flex flex-col gap-4 p-8'>
            <span className='font-merriweather font-bold text-2xl text-_green'>
                Projects
            </span>
            {
                repos.map((repo : Repo) => {
                    return (
                        <div key={repo.id} className='flex flex-col gap-4 '>
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
    );
}

export default Projects;