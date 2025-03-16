import React, { useEffect, useState } from 'react';
import ProjectContainer, { Repo } from '../components/projectContainer/projectContainer';
import axios from 'axios';

const Projects : React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [showMore, setShowMore] = useState<Boolean>(false);
    const orderedProjectsWithGif: string[] = [
        'ft_transcendence',
        'Bac-Note-Calculator',
        'webserv',
        'Inception',
        'cub3D',
        'FdF',
    ];
    const [error, setError] = useState<boolean>(false);
    let withGif:Repo[] = [];
    let withoutGif:Repo[] = [];
    const GITHUB_TOKEN = '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'
    
    useEffect(() => {
        axios.get('https://api.github.com/users/yettabaa/repos', {
            headers: {
                'authorization': `token ${GITHUB_TOKEN}`
            }
        })
        .then(response => { setRepos(response.data);})
        .catch(error => {
            setError(true);
            console.error('An error occured while fetching the projects', error);
        });
    }
    , []);

    try {
        
        repos.forEach((repo: Repo) => {
        if (orderedProjectsWithGif.includes(repo.name))  {
            withGif.push(repo);
        } else if (repo.name !== 'yettabaa') {
            withoutGif.push(repo);
        }
        });
    
        withGif.sort((a, b) => {
            const indexA = orderedProjectsWithGif.indexOf(a.name);
            const indexB = orderedProjectsWithGif.indexOf(b.name);
            return indexA - indexB;
        });
    } catch (error) {
        setError(true);
        console.error('An error occured while fetching the projects');
    }

    return (
        <>
            <span className='font-bold text-4xl text-_green '>
                Projects
            </span>
            <div id='projects' className='flex flex-col gap-10'>
                {error ? 
                    <span className='font-medium text-xl text-red-500'>
                        An error occured while fetching the projects
                    </span> :
                    <>
                        <ProjectContainer repos={withGif}/>
                        <span className='font-medium text-xl cursor-pointer' 
                        onClick={() => setShowMore(!showMore)}
                        >
    	    	        	{showMore ? 'Show less' : 'Show more ...'}
		    	        </span>
                        {showMore && <ProjectContainer repos={withoutGif} showMore={showMore}/>}
                    </>
                }
            </div>
        </>
    );
}

export default Projects;