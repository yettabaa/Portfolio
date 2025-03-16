import FdF from '../../assets/FdF-Scale-Z.gif';
import cub3D from '../../assets/cub3D_1.gif';
import inception from '../../assets/schema.png';
import bacNote from '../../assets/Bac-Note-Calculator.gif';
import transc from '../../assets/ft_transcendence2.png';
import http from '../../assets/http.jpeg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface Repo {
    id: number; // Assuming 'id' is a unique identifier
    name: string;
    description: string | null;
    html_url: string;
    language: string[] | string | null;
    languages_url: string;
}

const LanguagesBox = ({languages_url}:{languages_url: string}) => {
    const [languages, setLanguages] = useState<string[]>([]);
    const [total, setTotal] = useState<number>(0);
    const GITHUB_TOKEN = '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'

    useEffect(() => {
        axios.get(languages_url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`
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
    console.log('languages', languages);
    console.log('total', total);
    return (
        <>
            <ul className='flex gap-2'>
                {
                    Object.entries(languages).map(([key, value] : [string, string]) => {
                        return (
                            <li key={key} className='flex '>
                                <div className='bg-_green w-[10px] h-[10px] rounded-full'></div>
                                <p className='font-merriweather font-bold text-md'>
                                    {key}
                                </p>
                                <p>
                                    {((parseInt(value) / total) * 100).toFixed(1)}%
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
    }

    return (
        <div className='flex flex-col gap-12 sm:flex-row sm:justify-between sm:flex-wrap'>
        {
            repos.map((repo : Repo) => {
                return (
                    // <ProjectContainer repo={repo}/>
                    <div key={repo.id} className={`sm:w-[46%] relative group flex flex-col  justify-center gap-4 rounded-md overflow-hidden border-2 border-gray-500 ${showMore ? 'items-center h-64' : ''}`}>
                        {gifs[repo?.name] ? 
                            <img src={gifs[repo.name]} alt={repo.name} className=" h-72 w-auto" />
                            :
                            <span className='font-merriweather font-bold text-3xl text-_green text-center'>
                                {repo.name}
                            </span>
                        }
                        <div className={`absolute p-2 inset-0 bg-slate-500 bg-opacity-70 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${showMore ? 'h-64' : 'h-72 '}`}>
                            <span className='font-merriweather w-full text-center font-bold text-xl text-_green'>
                                {repo.name}
                            </span>
                            <p className="font-merriweather font-bold text-sm mb-2 w-full text-center">
                                {repo.description || "No description available"}
                            </p>
                            <div className='absolute bottom-2 flex flex-col gap-2 w-full'>
                                <LanguagesBox languages_url={repo.languages_url}/>   
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
    )
}

export default ProjectContainer;