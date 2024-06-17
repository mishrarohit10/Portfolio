import { useEffect, useState } from 'react';
import { FaCode, FaGithub } from 'react-icons/fa';

interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string;
}

export function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/mishrarohit10/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
        console.log(repos);
    }, []);

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