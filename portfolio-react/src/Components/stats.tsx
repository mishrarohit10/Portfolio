import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader } from './loader';

interface Language {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    decimal: string;
    text: string;
    hours: number;
    minutes: number;
}

interface WakatimeResponse {
    data: {
        human_readable_total: string,
        languages: Language[];
    }
}

const apiUrl = 'http://localhost:3001';

export function Stats() {
    const [stats, setStats] = useState<WakatimeResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<WakatimeResponse>(`${apiUrl}/stats`)
            .then((response) => {
                setStats(response.data);
            })
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <>
            <div className='stats-wrapper'>
                {loading ? <Loader /> :
                    <div className="stats-container">
                        <div className="stats-title">
                            <h1>Stats</h1>
                        </div>
                        <div className="stats-total">
                            <h2>Total time spent coding: {stats?.data.human_readable_total}</h2>
                        </div>
                        <div className="stats-languages-container">
                            {stats?.data.languages.map((language, index) => (
                                <div key={index} className="stats-language">
                                    <h3>{language.name}</h3>
                                    <p>{language.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>}
            </div>
        </>
    );
}