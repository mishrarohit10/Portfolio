import { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { Loader } from './loader';
import axios from 'axios';

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
}

export function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://api.github.com/users/mishrarohit10/repos');
                setRepos(response.data);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div> <Loader /> </div>;
    }

    // return (
    //     <div className='project-container'>
    //         <div className='project-card'>
    //             <p>this is my project</p>
    //         </div>
    //     </div>
    // );

    return (
        <div className='project-container'>
            {repos.map((repo) => {
                return (
                    <div key={repo.id} className='project-card'>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target='_blank' rel='noreferrer'> <FaCode /> Code
                        </a>
                    </div>
                );
            })}
        </div>
    );
}