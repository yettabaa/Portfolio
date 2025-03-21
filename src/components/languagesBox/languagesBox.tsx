import React, { useEffect, useState } from 'react';
import axios from 'axios';

// https://raw.githubusercontent.com/ozh/github-colors/master/colors.json
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
    'SCSS': '#c6538c',
    'Batchfile': '#C1F12E',
}

interface LanguagesBoxProps {
    languages_url: string;
    html_url: string;
}

const LanguagesBox : React.FC<LanguagesBoxProps> = ({languages_url, html_url}) => {
    const [languages, setLanguages] = useState<{[key:string]: number}>({});
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        const token = html_url ? import.meta.env.VITE_GITHUB_TOKEN : import.meta.env.VITE_PRIVATE_GITHUB_TOKEN;
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

    return (
        <>
            <ul className='flex flex-wrap gap-x-6 gap-y-2 overflow-ellipsis'>
                {
                    Object.entries(languages).map(([key, value]) => {
                        return (
                            <li key={key} className='flex gap-1 items-center'>
                                <div className='w-[10px] h-[10px] rounded-full mr-1'  style={{ backgroundColor: languagesColors[key] }} ></div>
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

export default LanguagesBox;