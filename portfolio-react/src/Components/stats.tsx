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

    useEffect(() => {
        axios.get<WakatimeResponse>(`${apiUrl}/stats`)
            .then((response) => {
                setStats(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="stats">
            <div className="stats-container">
                <div className="stats-title">
                    <h1>Stats</h1>
                </div>
                <div className="stats-content">
                    {stats ? (
                        <>
                            <p>
                                Total time spent coding: {stats.data.human_readable_total}
                            </p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Language</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stats.data.languages.map((language) => (
                                        <tr key={language.name}>
                                            <td>{language.name}</td>
                                            <td>{language.text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </div>
    );
}