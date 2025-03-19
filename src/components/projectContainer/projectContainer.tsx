import FdF from '../../assets/FdF-Scale-Z.gif';
import cub3D from '../../assets/cub3D_1.gif';
import inception from '../../assets/schema.png';
import bacNote from '../../assets/Bac-Note-Calculator.gif';
import transc from '../../assets/ft_transcendence2.png';
import http from '../../assets/http.jpeg';
import AHouseGuru from '../../assets/A-House-Guru.png';
import volenteer from '../../assets/volunteer-travel.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface Repo {
    id: number; // Assuming 'id' is a unique identifier
    name: string;
    description: string | null;
    html_url: string;
    languages_url: string;
    preview: string;
}

const languagesColors : any= {
    'Python': '#3572A5',    
    'TypeScript': '#3178c6',    
    'JavaScript': '#f1e05a',    
    'HTML': '#e34c26',
    'CSS': '#663399',
    'Dockerfile': '#384d54',
    'C++': '#f34b7d',
    'Makefile': '#427819',
    'Perl': '#0298c3',
    'PHP': '#4F5D95',
    'Ruby': '#701516',
    'Shell': '#89e051',
    'C': '#555555',
    'Roff': '#ecdebe',
}

// let _set = new Set<string>();
const LanguagesBox = ({languages_url, html_url}:{languages_url: string, html_url:string}) => {
    const [languages, setLanguages] = useState<{[key:string]: number}>({});
    const [total, setTotal] = useState<number>(0);


    useEffect(() => {
        const token = html_url ? import.meta.env.VITE_GITHUB_TOKEN : import.meta.env.VITE_PRIVATE_GITHUB_TOKEN;
        console.log(html_url, token);
        console.log(languages_url);
        axios.get(languages_url, {
            headers: {
                'Authorization': `token ${token}`,
            }
        })
        .then((response) => {
            setLanguages(response.data);
            setTotal(Object.values<number>(response.data).reduce((a:number, b:number) => a + b, 0));
        })
        .catch((error) => {
            console.error('An error occured while fetching the languages', error);
        });
    }, []);
    // Object.keys(languages).forEach((key) => {
    //     _set.add(key);
    // });
    // console.log(_set);

    return (
        <>
            <ul className='flex flex-wrap items-center gap-4 overflow-ellipsis'>
                {
                    Object.entries(languages).map(([key, value]) => {
                        return (
                            <li key={key} className='flex gap-1 items-center'>
                                <div className='w-[10px] h-[10px] rounded-full mr-2'  style={{ backgroundColor: languagesColors[key] }} ></div>
                                <p className='font-sans font-bold text-sm'>
                                    {key}
                                </p>
                                <p className='font-sans font-medium text-sm text-neutral-300'>
                                    {((value / total) * 100).toFixed(1)}%
                                </p>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

const ProjectContainer  = ({repos, showMore=false} : {repos: Repo[], showMore?:Boolean}) => {
    const gifs : any = {
        'FdF': FdF,
        'cub3D': cub3D,
        'Inception': inception,
        'Bac-Note-Calculator': bacNote,
        'ft_transcendence':transc,
        'webserv': http,
        'A-House-Guru': AHouseGuru,
        'volunteer-travel': volenteer,
    }

    return (
        <div className='flex flex-col gap-12 sm:flex-row sm:justify-between sm:flex-wrap'>
        {
            repos.map((repo : Repo) => {
                return (
                    // <ProjectContainer repo={repo}/>
                    <div key={repo.id} className={`sm:w-[46%] relative group flex flex-col  justify-center gap-4 rounded-lg overflow-hidden  ${showMore ? 'items-center h-64' : ''}`}>
                        {
                            gifs[repo?.name] ? 
                            <img src={gifs[repo.name]} alt={repo.name} className=" h-72 w-auto" />
                            :
                            <span className='font-bold text-3xl text-_green text-center'>
                                {repo.name}
                            </span>
                        }
                        <div className={`absolute p-2 inset-0 bg-slate-500 bg-opacity-70 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${showMore ? 'h-64' : 'h-72 '}`}>
                            <span className='w-full text-center font-bold text-xl text-_green'>
                                {repo.name}
                            </span>
                            <p className="font-bold text-sm mb-2 w-full text-center">
                                {repo.description || "No description available"}
                            </p>
                            <div className='absolute bottom-2 flex flex-col gap-2 w-full'>
                                <LanguagesBox languages_url={repo.languages_url} html_url={repo.html_url}/>   
                                <a 
                                    href={(repo.html_url) ? repo.html_url : repo.preview} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="bg-_green w-1/2 text-bg text-center font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                    >
                                    {(repo.html_url) ?  'View on GitHub' : 'Preview'}
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </div>
    )
}

export default ProjectContainer;