import React from 'react';
import FdF from '../assets/FdF-Scale-Z.gif';
import cub3D from '../assets/cub3D_1.gif';
import inception from '../assets/schema.png';
import bacNote from '../assets/Bac-Note-Calculator.gif';
import transc from '../assets/ft_transcendence2.png';
import http from '../assets/http.jpeg';
import AHouseGuru from '../assets/A-House-Guru.png';
import volenteer from '../assets/volunteer-travel.png';
import LanguagesBox from './languagesBox';

export interface Repo {
    id: number; // Assuming 'id' is a unique identifier
    name: string;
    description: string | null;
    html_url: string;
    languages_url: string;
    homepage: string;
}

interface ProjectContainerProps {
    repos: Repo[];
    showMore?: boolean;
}

const ProjectContainer  : React.FC<ProjectContainerProps> = ({repos, showMore=false}) => {
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
                    <div key={repo.id} className={`sm:w-[46%] shadow-lg shadow-gray-600/50 relative group flex flex-col  justify-center gap-4 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${showMore ? 'items-center h-64' : ''}`}>
                        {
                            gifs[repo?.name] ? 
                            <img 
                                src={gifs[repo.name]} 
                                alt={repo.name}
                                width={1900}
                                height={960} 
                                loading="lazy"
                                className=" h-72 w-auto" 
                            />
                            :
                            <span className='font-bold text-3xl text-_green text-center'>
                                {repo.name}
                            </span>
                        }
                        <div className={`absolute p-2 inset-0 bg-slate-500 bg-opacity-70  flex flex-col gap-2 overflow-auto opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${showMore ? 'h-64' : 'h-72 '}`}>
                            <h2 className='text-center font-bold text-xl text-_green'>
                                {repo.name}
                            </h2>
                            <p className="font-bold text-sm mb-2 text-center">
                                {repo.description || "No description available"}
                            </p>
                            <div className='flex flex-col gap-2 mt-auto'>
                                <LanguagesBox languages_url={repo.languages_url} html_url={repo.html_url}/>
                                <div className='flex gap-6 justify-center'>
                                    {repo.html_url && <a 
                                            href={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="bg-_green w-1/3 text-bg text-center font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                            >
                                            GitHub
                                        </a>
                                    }
                                    {repo.homepage && <a 
                                            href={repo.homepage} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="bg-_green w-1/3 text-bg text-center font-medium py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                                            >
                                            Preview
                                        </a>
                                    }
                                </div>   
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