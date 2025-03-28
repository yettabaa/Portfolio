import React, { useEffect, useState } from 'react';
import ProjectContainer, { Repo } from './projectContainer';
import axios from 'axios';
import privateRepos from '../data/repos.json';

const Projects : React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [showMore, setShowMore] = useState<boolean>(false);
    const orderedWebProjects : string[] = [
        'A-House-Guru',
        'volunteer-travel',
        'ft_transcendence',
        'Bac-Note-Calculator',
    ];
    const orderedOtherProjects: string[] = [
        'webserv',
        'Inception',
        'cub3D',
        'FdF',
    ];
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        axios.get('https://api.github.com/users/yettabaa/repos', {
            headers: {
                'authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            }
        })
        .then(response => { 
            const allRepos = [...response.data, ...privateRepos];
            setRepos(allRepos);
        })
        .catch(error => {
            setError(true);
            console.error('An error occured while fetching the projects', error);
        });
    }
    , []);

    const webProjects = repos.filter((repo: Repo) =>
        orderedWebProjects.includes(repo.name)
    ).sort((a, b) => {
        const indexA = orderedWebProjects.indexOf(a.name);
        const indexB = orderedWebProjects.indexOf(b.name);
        return indexA - indexB;
    });

    const otherProjects = repos.filter((repo: Repo) =>
        orderedOtherProjects.includes(repo.name)
    ).sort((a, b) => {
        const indexA = orderedOtherProjects.indexOf(a.name);
        const indexB = orderedOtherProjects.indexOf(b.name);
        return indexA - indexB;
    });

    const showMoreProjects = repos.filter((repo: Repo) =>
        !orderedWebProjects.includes(repo.name) &&
        !orderedOtherProjects.includes(repo.name) &&
        repo.name !== 'yettabaa'
    );

    return (
        <>
            <div id='projects' className='flex flex-col'>
                <h2 className='font-bold text-4xl text-center py-20 text-_green m-auto '>
                    Web Projects
                    <p className='text-lg font-medium'>
                        ( hover over any project to learn more ! )
                    </p>
                </h2>
                
                {error ? 
                    <span className='font-medium text-xl text-red-500'>
                        An error occured while fetching the projects
                    </span> :
                    <>
                        <ProjectContainer repos={webProjects}/>
                    </>
                }
                
                <h2 className='font-bold text-4xl py-20 text-_green m-auto'>
                    Other Projects
                </h2>
                {error ? 
                    <span className='font-medium text-xl text-red-500'>
                        An error occured while fetching the projects
                    </span> :
                    <>
                        <ProjectContainer repos={otherProjects}/>
                        <span className='font-medium text-xl cursor-pointer py-10' 
                            onClick={() => setShowMore(!showMore)}
                        >
    	    	        	{showMore ? 'Show less' : 'Show more ...'}
		    	        </span>
                        {showMore && <ProjectContainer repos={showMoreProjects} showMore={showMore}/>}
                    </>
                }
            </div>
        </>
    );
}

export default Projects;