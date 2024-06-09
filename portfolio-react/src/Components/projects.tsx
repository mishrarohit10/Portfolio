import { useEffect, useState } from 'react';

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

    return (
        <div className='project-container'>
            <div className='project-card'>
                <p>jirgbhgirhbierugrugwriuw</p>
            </div>
        </div>
    );
}